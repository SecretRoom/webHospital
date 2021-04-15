/* eslint-disable class-methods-use-this */
import MainAPI from './main.api';

/**
 * API для страницы "Прием Биоматериалов"
 *
 * @class BiomaterialsAPI
 * @extends {MainAPI}
 */
class BiomaterialsAPI extends MainAPI {
  /**
   * Запрос списка анализов в биоматриалах, поиск
   *
   * @param {object} data - данные из фильтра для получения списка анализов
   * {
      @param {*}  cdent: null,
      @param {*}  ident: '',
      @param {*}  cdobstype: null,
      @param {*}  kodse: '',
      @param {*}  niblz: '',
      @param {*}  famip: '',
      @param {*}  namep: '',
      @param {*}  otchp: '',
      @param {*}  doctor: null,
      @param {*}  cdotdel: null,
      @param {*}  datregfrom: null,
      @param {*}  datregto: null,
      }
   * @returns Promise с ответом от сервера
   * @memberof BiomaterialsAPI
   */

  getAnalizes = (data = {
    cdent: null,
    ident: '',
    cdobstype: null,
    kodse: '',
    niblz: '',
    famip: '',
    namep: '',
    otchp: '',
    doctor: null,
    cdotdel: null,
    datregfrom: null,
    datregto: null,
  }) => this.getData('/laboratory/listbiomatpac', JSON.stringify(data));
  /**
   * Обновления данных анализа/установка чекбокса
   *
   * @param {object} data - Данные анализа и значение чекбокса
   * {
  //   @param {*} "cdent": "ec17242b-fe09-4d2f-8dc8-53637e52a317",
  //   @param {*} "biomattaken": false,
  //   @param {*} "datreg":"2019-07-12 13:00",
  //   @param {*} "cdsotr":"d250e0e9-b1a1-4acb-ad54-d668f9122392"
  // }
   * @example
   * updateAnalisisField(data, 'PASSED' | 'REQUIRED_DONE' | 'DATE' |  'DOCTOR')
   * @returns Promise с ответом от сервера
   * @memberof BiomaterialsAPI
   */

  updateAnalisisField = {
    PASSED: (data) => this.getData('/laboratory/setbiomattaken', JSON.stringify(data)),
    REQUIRED_DONE: (data) => this.getData('/laboratory/setbiomattakenrequired', JSON.stringify(data)),
    DATE: (data) => this.getData('/laboratory/setdatbiomattaken', JSON.stringify(data)),
    DOCTOR: (data) => data,
  }

  /**
   * Изменение email пациента
   *
   * @param {object} data - по маске
   *  @param {string} cdpac - код пациента,
   *  @param {string} email - новый email,
   * @returns Promise с ответом от сервера
   * @memberof BiomaterialsAPI
   */
  setPacientEmail = (data) => this.getData('/laboratory/set_pacient_email', data);

  /**
   * Редактирование статуса отправки на email
   *
   * @param {object} data - по маске
   *  @param {number} emailstatus - код отправки 8 - отправлять, 1 - не отправлять,
   *  @param {array} listcdent - список cdent направлений,
   * @returns Promise с ответом от сервера
   * @memberof BiomaterialsAPI
   */
  setPacientEmailStatus = (data) => this.getData('/laboratory/set_email_status', data);

  /**
   * Запрос списка врачей
   *
   * @returns Promise с отвеом от сервера
   * @memberof BiomaterialsAPI
   */
  getDoctorList = () => this.getData('/laboratory/listbiomatdoc');

  /**
   *
   *
   * @param {array} data - список id выбранных анализов
   * @returns Promise - список услуг
   * @memberof BiomaterialsAPI
   */
  getResearchList = (data) => this.getData('/laboratory/listbiomatuslug', data);

  /**
   * Запрос списка пробирок (контейнеров), которые нужно взять у пациента
   *
   * @param {array} data - список id выбранных анализов
   * @returns Promise - список контейнеров
   */
  getContainersList = (data) => this.getData('/laboratory/listbiomatcont', data);

  /**
   * Печать штрихкода пробирки
   *
   * @param {string} data - текст штрихкода
   * @returns Promise - xml
   */
  printBarcodeBiomat = (data) => this.getData('/barcode/print_bc', { textbc: data });

  /**
   *  добавляет биоматериал в анализ для данного контейнера
   *
   * @param {string} data - данные контейнера
   * @returns Promise - ответ с сервера
   */
  addBiomaterialForContainer = (data) => this.getData('/laboratory/add_biomaterial_for_container', data);

  /**
   * Ситилаб. Запрос данных по выбранным направлениям пациента
   *
   * @param {array} data - список id выбранных анализов
   * @returns Promise - список: таблица анализов, сообщение для пользователя, список параметров
   */
  getCitilabData = (data) => this.getData('/citilab_int/data_for_inq', data);

  /**
   * Ситилаб. Отправка данных
   *
   * @param {object} data - по маске
   *  @param {array} cdpreinq - Список выбранных/отмеченных cdpreinq,
   *  @param {number} pregnancy_duration - Срок беременности в неделях (если пациент женского пола, иначе не отправлять),
   *  @param {number} cycle_period - Период цикла (если пациент женского пола, а иначе не надо),
   * @returns Promise - cdinq созданной заявки
   */
  sendCitilabData = (data) => this.getData('/citilab_int/send_inquiry', data);

  /**
   * Ситилаб. Получение таблицы отправленных заявок
   *
   * @param {string} data - id пациента,
   * @returns Promise - таблица
   */
  getCitilabTableInqData = (data) => this.getData('/citilab_int/list_inq', data);

  /**
   * Ситилаб. Получение информационного сообщения по назначениям
   *
   * @param {array} data - Список выбранных/отмеченных cdpreinq,
   * @returns Promise - объект { info_isrequired: boolen, infonote: string }
   */
  getCitilabTargetInfo = (data) => this.getData('/citilab_int/get_targetinfo', data);

  /**
   * Ситилаб. Получение списка доп. параметров
   *
   * @param {array} data - Список выбранных/отмеченных cdpreinq,
   * @returns Promise - массив со списком параметров
   */
  getCitilabUserFields = (data) => this.getData('/citilab_int/get_userfields', data);

  /**
   * Ситилаб. Сохранение списка доп. параметров
   *
   * @param {array} data - Список пользовательских параметров,
   * @returns Promise с отвеом от сервера
   */
  saveCitilabUserFields = (data) => this.getData('/citilab_int/set_userfields', data);

  /**
   * Ситилаб. Получение данных для таблицы сформированных штрихкодов
   *
   * @param {object} data - Список кодов заявок,
   * @returns Promise с данными для таблицы
   */
  getCitilabListBar = (data) => this.getData('/citilab_int/list_bar', data);
}

export default new BiomaterialsAPI();
