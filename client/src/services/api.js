/* eslint-disable class-methods-use-this */
import axios from './axios.config_OLD';

/**
 * @category API
 *
 * @class APIConstructor
 */
class CommonAPI {
  get axios() {
    return axios
  }

  getSurveyList(data) {
    return axios.post('/appointment/PriemUslug', data);
  }

  // // получение списка пациентов
  // // Поиск пациентов
  // // {"famip" : famip, "namep" : namep, "otchp" : otchp, "drogd" : "", "cnils" : ""}
  fetchPatientList(data) {
    // return axios.post('/appointment/PriemList', data)
    return axios.post('/patient/find', data);
  }

  // // МЕТОДЫ СТРАНИЦЫ ОСМОТРА

  // // Обновление параметра осмотра
  // // Прнимает
  // // cdent  код осмотра
  // // сdpar  код параметра
  // // value  новое значение параметра
  // // возврвщает json с результататми выполнения status message
  // updateExaminationParameter(data) {
  //   return axios.post('/examination/jsonparam/', data).catch((error) => {
  //     throw new Error(`Ошибка сохранения данных  в БД ${error}`);
  //   });
  // }

  // // обновление данных(в шапке) осмтора пациента
  // // Принимает:
  // // datreg: Дата регистрация
  // // datsign: Дата подписи
  // // shdia: код диагноза
  // // cdvopl: Вид оплаты
  // // cdmest: Место
  // // cdprch: Причина,
  // updateExaminationData(cdent, data) {
  //   return axios.post(`/examination/json/${cdent}/`, data).catch((error) => {
  //     // console.log(data);
  //     throw new Error(`Ошибка сохранения данных  в БД ${error}`);
  //   });
  // }

  // // создать осмотр
  // createExamination(cdpac, cdobstype, cdsotr) {
  //   return axios
  //     .post('/examination/addexam/', {
  //       cdpac,
  //       cdobstype,
  //       cdsotr,
  //     })
  //     .catch((error) => {
  //       throw new Error(`Ошибка добавление осмотра ${error}`);
  //     });
  // }

  // // Удаление осмотра по ID(cdent) осмотра
  // deleteExamination(cdent, cdsotr) {
  //   return axios
  //     .post('/examination/delexam/', {
  //       cdent,
  //       cdsotr,
  //     })
  //     .catch((error) => {
  //       throw new Error(`Ошибка удаления осмотра ${error}`);
  //     });
  // }

  // // Подписать осмотр по ID(cdent) осмотра
  // signExamination(id) {
  //   return axios(`/examination/signexam/${id}/`);
  // }

  // // Снять подпись по ID(cdent) осмотра
  // unsignExamination(id) {
  //   return axios(`/examination/unsignexam/${id}/`);
  // }

  // Список диагнозов

  getListOfDiagnosis() {
    const signal = axios.CancelToken.source()
    window.sentRequests.push((message) => signal.cancel(message || 'Запрос прерван'))
    return axios('/directory/listSprav/sldiagn/', { cancelToken: signal.token });
  }

  // /Отправка изображения на обучение
  // {
  //     "cdsotr": "d250e0e9-b1a1-4acb-ad54-d668f9122392",
  //     "filename": "de61bcb8-5c94-47c4-b6ba-1451765c482b.jpg",
  //     "data": {"url" : "http://192.168.0.40:3010",
  // "token":"UafsldjkHJ3hfafZah3984","coords":[{"x":"2","y":"3"},{"x":"2","y":"4"},{"x":"4","y":"4"},{"x":"3","y":"4"}],"matrixstep":6}
  // }
  trainingNN(emploeeId, filename, data) {
    return axios.post(
      '/examination/setfileparamlearn',
      JSON.stringify({
        cdsotr: emploeeId,
        filename,
        data,
      }),
    );
  }

  // Загрузка файла на сервер к протоколу
  // Принимает файл и данные:
  // id сотрудника(cdsotr),
  // id протокола(cdent)
  // id параметра(cdpar)
  uploadFileFromProtocol(file, data) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(data));
    return axios.post('/examination/addfileparam', formData);
  }

  // Получить список файлов прикрепленных к протоколу осмотра
  // Принимает id протокола(cdent) и id параметра(cdpar)
  getFileList(protocolId, parameterId) {
    return axios.post(
      '/examination/getlstfileparam',
      JSON.stringify({
        cdent: protocolId,
        cdpar: parameterId,
      }),
    );
  }

  // Скачать файл из протокола
  downloadFile(fileName) {
    const src = `/examination/getfileparam/${fileName}`;
    return axios({
      url: src,
      method: 'GET',
      responseType: 'blob',
    }).then((res) => {
      const url = window.URL.createObjectURL(
        new Blob([res.data], {
          type: res.headers['content-type'],
        }),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  // /Отправка изображения на анализ

  // {
  //     "cdsotr": "d250e0e9-b1a1-4acb-ad54-d668f9122392",
  //     "filename": "de61bcb8-5c94-47c4-b6ba-1451765c482b.jpg",
  //     "url" : "http://192.168.0.40:3010",
  //     "token":"UafsldjkHJ3hfafZah3984"
  // }
  analizeImage(emploeeId, filename, url, token) {
    return axios.post(
      '/examination/setfileparamanalyse',
      JSON.stringify({
        cdsotr: emploeeId,
        filename,
        url,
        token,
      }),
    );
  }

  // Запрос результата анализа изображений
  requestImageAnalisisResult(
    emploeeId = localStorage.getItem('cdsotr'),
    filename,
    url = 'http://192.168.0.40:3010',
    token = 'UafsldjkHJ3hfafZah3984',
  ) {
    return axios.post(
      '/examination/setfileparamresult',
      JSON.stringify({
        cdsotr: emploeeId,
        filename,
        url,
        token,
      }),
    );
  }
}

const API = new CommonAPI();

export default API;
