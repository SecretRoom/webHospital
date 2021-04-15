/* eslint-disable no-use-before-define */
import struct from './struct';

export function addZero(item) {
  return item.toString().length === 1 ? `0${item}` : item;
}

export default class SocketNotifier {
  constructor(url) {
    this._url = url;
    this._type = {
      subscribe: { type: '1', struct: struct('HBH16B') },
      notify: { type: '1', struct: struct('HBHBBB16B') },
      message: { type: '2', struct: struct('HBH16B16BBBB') },
      auth: { type: '2', struct: struct('HBH16B16B') },
    };
    this._subscriptions = [];
    this._message = {
      type: '',
      head: [],
      sender: '',
      recipient: '',
      text: '',
      time: '',
      date: '',
    };
    this._types = {
      MESSAGE: 'MESSAGE',
      NOTIFICATION: 'NOTIFICATION',
    };
    this._statusType = {
      CONNECTION_SUCCESS: 'CONNECTION_SUCCESS',
      CONNECTION_FAILED: 'CONNECTION_FAILED',
      CONNECTION_CLOSED_CLEAN: 'CONNECTION_CLOSED_CLEAN',
      BREAKAGE: 'BREAKAGE',
      NOT_CONNECTED: 'NOT_CONNECTED',
    };
    this._status = this._statusType.NOT_CONNECTED;
    this._socket = null;
    this.time = +`${new Date().getHours()}${new Date().getMinutes()}`;
  }

  get url() {
    return this._url;
  }

  get socket() {
    return this._socket;
  }

  get message() {
    return this._message;
  }

  get status() {
    return this._status;
  }

  get subscriptions() {
    return this._subscriptions;
  }

  connect() {
    this._status = this._statusType.NOT_CONNECTED;
    const socket = new WebSocket(this._url);
    socket.onopen = () => {
      // console.log('Соединение установлено.');
      this._status = this._statusType.CONNECTION_SUCCESS;
      const { struct } = this._type.auth;
      const connectMessage = new Uint8Array(
        struct.pack(
          struct.size - 2,
          2,
          this.time,
          ...prepareGuid(localStorage.getItem('cdsotr')),
          ...new Array(16),
        ),
      );
      socket.send(connectMessage);
    };
    socket.onmessage = (event) => {
      this.resolve(event);
    };
    socket.onerror = () => {
      this._status = this._statusType.CONNECTION_FAILED;
    };
    socket.onclose = (event) => {
      if (event.wasClean) {
        this._status = this._statusType.CONNECTION_CLOSED_CLEAN;
        // console.log('Соединение закрыто чисто');
      } else {
        this._status = this._statusType.BREAKAGE;
        // console.log('Обрыв соединения');
      }
      // console.log(`Код: ${event.code} причина: ${event.reason}`);
    };
    // console.log(this._status);
    this._socket = socket;
    return socket;
  }

  disconnect() {
    this._subscriptions = [];
    this._socket.onclose = () => {};
    this._socket.close();
    this._status = this._statusType.CONNECTION_CLOSED_CLEAN;
    // console.log(this._status);
  }

  onmessage(func) {
    this._socket.onmessage = func;
  }

  resolve(event) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      let intArr = [];
      function formatTime(intArr) {
        const fullTime = struct('H').unpack(new Uint8Array(intArr).buffer)[0].toString();
        const minutes = fullTime.slice(2).length > 1 ? fullTime.slice(2) : `0${fullTime.slice(2)}`;
        return `${fullTime.slice(0, 2)}:${minutes}`;
      }
      reader.onloadend = () => {
        this._message = {};
        intArr = Buffer.from(reader.result, 'binary');
        if (intArr.length > 24) {
          const { struct } = this._type.message;
          [this._message.day, this._message.mounth, this._message.year] = intArr.slice(37, 40);
          this._message = {
            ...this._message,
            type: this._types.MESSAGE,
            head: struct.unpack(
              new Uint8Array(intArr).buffer,
            ),
            text: new TextDecoder().decode(
              new Uint8Array(intArr.slice(40)),
            ),
            time: formatTime(intArr.slice(3, 5)),
            date: `${addZero(this._message.day)}.${addZero(this._message.mounth)}.20${this._message.year}`,
          };
        } else {
          const { struct } = this._type.notify;
          [this._message.day, this._message.mounth, this._message.year] = intArr.slice(5, 8);
          this._message.type = this._types.NOTIFICATION;
          this._message.head = struct.unpack(
            new Uint8Array(intArr).buffer,
          );
        }
        resolve(this._message);
        // console.log('Получено сообщение', this._message);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsArrayBuffer(event.data);
    });
  }

  subscribe(guid) {
    this._isConnected(this.status);
    if (!guid) throw Error('Необходим GUID для подписки');
    if (this._subscriptions.indexOf(guid) >= 0) throw Error('Уже подписан!');
    this._subscriptions.push(guid);
    return this._subscribeSignal(guid);
  }

  unsubscribe(guid) {
    this._isConnected(this.status);
    this._subscriptions = this.subscriptions.filter((id) => id !== guid);
    return this._subscribeSignal(guid);
  }

  emit(
    guid = localStorage.getItem('cdsotr'),
    day = new Date().getDate(),
    mounth = new Date().getMonth() + 1,
    year = new Date().getFullYear(),
  ) {
    this._isConnected(this.status);
    if (!guid) throw Error('Необходимо указать guid первым аргументом');
    const formatYear = year.toString().length > 2 ? year.toString().split('').slice(2).join('') : year;
    const { struct } = this._type.notify;
    const head = new Uint8Array(
      struct.pack(
        struct.size - 2,
        1,
        this.time,
        day,
        mounth,
        formatYear,
        ...prepareGuid(guid),
      ),
    );
    // console.log(head, struct.size);
    this._socket.send(head);
  }

  sendMessage(
    text = 'test',
    to = 'd250e0e9-b1a1-4acb-ad54-d668f9122392',
    day = new Date().getDate(),
    mounth = new Date().getMonth() + 1,
    year = new Date().getFullYear(),
  ) {
    this._isConnected(this.status);
    const formatText = text.length < 15000 ? text : text.slice(0, 15000);
    const formatYear = year.toString().length > 2 ? year.toString().split('').slice(2).join('') : year;
    const { struct } = this._type.message;
    const sender = prepareGuid(localStorage.getItem('cdsotr'));
    const recipient = prepareGuid(to);
    const message = new TextEncoder().encode(formatText);

    const fullMessage = new Uint8Array([
      ...new Uint8Array(
        struct.pack(
          struct.size - 2 + message.length,
          2,
          this.time,
          ...sender,
          ...recipient,
          day,
          mounth,
          formatYear,
        ),
      ),
      ...message,
    ]);
    // console.log('send', message, fullMessage);
    this._socket.send(fullMessage);
  }

  _isConnected(status) {
    if (status !== this._statusType.CONNECTION_SUCCESS) throw new Error(`Соединение не установлено! ${this.status}`);
    return true;
  }

  _subscribeSignal(guid) {
    this._isConnected(this.status);
    const { struct } = this._type.subscribe;
    const head = new Uint8Array(
      struct.pack(
        struct.size - 2,
        1,
        this.time,
        ...prepareGuid(guid),
      ),
    );
    // console.log(head, struct.size);
    return new Promise((resolve) => {
      this._socket.send(head);
      resolve();
    });
  }
}

function prepareGuid(guid) {
  const string = guid.match(/([A-Za-z0-9])/gi).join('');
  const result = [];
  let k = 0;
  let c = 1;
  for (let i = 0; i < string.length; i += 1) {
    if (i % 2 === 0) {
      result.push(k);
      k = 0;
      c = 16;
    } else {
      c = 1;
    }
    switch (string[i].toString()) {
      case '1':
        k += c;
        break;
      case '2':
        k += 2 * c;
        break;
      case '3':
        k += 3 * c;
        break;
      case '4':
        k += 4 * c;
        break;
      case '5':
        k += 5 * c;
        break;
      case '6':
        k += 6 * c;
        break;
      case '7':
        k += 7 * c;
        break;
      case '8':
        k += 8 * c;
        break;
      case '9':
        k += 9 * c;
        break;
      case 'a':
        k += 10 * c;
        break;
      case 'b':
        k += 11 * c;
        break;
      case 'c':
        k += 12 * c;
        break;
      case 'd':
        k += 13 * c;
        break;
      case 'e':
        k += 14 * c;
        break;
      case 'f':
        k += 15 * c;
        break;
      default:
        break;
    }
  }
  return result;
}
