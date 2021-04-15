/* eslint-disable class-methods-use-this */
import MainAPI from './main.api';

/**
 * API для страницы протоколов
 *
 * @class ProtocolsAPI
 * @extends {MainAPI}
 */
class ProtocolsAPI extends MainAPI {
  /**
   * Метод для получения списка протоколов
   *
   * @param {string} id - cdpac пациента
   * @returns {array} Список протоколов
   * @memberof ProtocolsAPI
   */
  getExaminationList(id) {
    return this.getData('/examination/listdocs', {
      cdpac: id,
    });
  }

  /**
   * Метод для получения данных протокола
   *
   * @param {string} id - cdent протокола
   * @returns {array} данные протокола
   * @memberof ProtocolsAPI
   */
  getProtocolData(id) {
    return this.getData(`/examination/json/${id}/`);
  }

  // создать осмотр
  createExamination(cdpac, cdobstype, cdsotr) {
    return this.getData('/examination/addexam/', {
      cdpac,
      cdobstype,
      cdsotr,
    });
  }

  // Обновление параметра осмотра
  // Прнимает
  // cdent  код осмотра
  // сdpar  код параметра
  // value  новое значение параметра
  // возврвщает json с результататми выполнения status message
  updateExaminationParameter(data) {
    return this.getData('/examination/jsonparam/', data);
  }

  // обновление данных(в шапке) осмтора пациента
  // Принимает:
  // datreg: Дата регистрация
  // datsign: Дата подписи
  // shdia: код диагноза
  // cdvopl: Вид оплаты
  // cdmest: Место
  // cdprch: Причина,
  updateExaminationData(cdent, data) {
    return this.getData(`/examination/json/${cdent}/`, data);
  }

  // Подписать осмотр по ID(cdent) осмотра
  signProtocol(idProtocol, idProfile) {
    return this.getData('/examination/signexam/', { cdent: idProtocol, cdsotr: idProfile });
  }

  // Снять подпись по ID(cdent) осмотра
  unsignProtocol(id) {
    return this.getData(`/examination/unsignexam/${id}/`);
  }

  /**
   * Метод для компирования протокола
   *
   * @param {*} cdent - id протокола
   * @param {string} [cdsotr=localStorage.getItem('cdsotr')] - id сотрудника
   * @returns результат операции
   * @memberof ProtocolsAPI
   */
  copyProtocol(cdent, cdsotr = localStorage.getItem('cdsotr')) {
    return this.getData('/examination/copyexam/', {
      cdent,
      cdsotr,
    });
  }

  // Удаление осмотра по ID(cdent) осмотра
  deleteProtocol(cdent, cdsotr) {
    return this.getData('/examination/delexam/', {
      cdent,
      cdsotr,
    });
  }

  // Список файлов

  // удалить файл из протокола осмотра
  // Принимает id сотрудника(cdsotr), id файла(cdfile)
  deleteFile(employeeId, fileId) {
    return this.getData(
      '/examination/delfileparam',
      JSON.stringify({
        cdsotr: employeeId,
        cdfile: fileId,
      }),
    );
  }

  getListOfDiagnosis(token) {
    return this.getData({
      url: '/directory/listSprav/sldiagn/',
      params: { cancelToken: token },
    });
  }

  // Метод для получения списка шаблонов
  getTemplList(currentProtocol, nmtempl, privateFlag, token, cdsotr) {
    return this.getData(`/examination/getEntryTemplList?cdent=${currentProtocol}&nmtempl=${nmtempl}&private_flag=${privateFlag}&cdsotr=${cdsotr}`,
      null,
      { cancelToken: token })
  }

  // Применение выбранного шаблона
  applyTempl(currentProtocol, templId, token) {
    return this.getData(`${'/examination/ApplyEntryTempl?'
    + '&cdent='}${currentProtocol
    }&cdtempl=${templId}`, {}, { cancelToken: token })
  }

  // Создание нового шаблона
  saveNewTempl(cdent, nmtempl, pol, agefrom, ageto, shdiafrom, shdiato, privateFlag, prof, token, cdsotr) {
    return this.getData(`${'/examination/SaveNewEntryTempl?'
    + 'cdent='}${cdent
    }&nmtempl=${nmtempl
    }&pol=${pol
    }&agefrom=${agefrom
    }&ageto=${ageto
    }&shdiafrom=${shdiafrom
    }&shdiato=${shdiato
    }&private_flag=${privateFlag
    }&prof=${prof
    }&cdsotr=${cdsotr}`,
    JSON.stringify({
      cdent,
      nmtempl,
    }),
    { cancelToken: token })
  }

  // получение данных для создания осмотра
  getOtList(cdpac, token) {
    return this.getData('/examination/getotlist', { cdpac, cdsotr: localStorage.getItem('cdsotr') }, { cancelToken: token })
  }

  // получение списка осмотров для печати
  getListExaminationOfPrint(currentProtocol) {
    return this.getData(`/examination/getRepList/${currentProtocol}/`)
  }

  // получение осмотра для печати  old
  // getExaminationOfPrint(currentProtocol, REPDATA, FILENAME, idrep, idProfile = localStorage.getItem('cdsotr')) {
  //   return this.getData(
  //     `/examination/rep?cdent=${String(currentProtocol)}&idRep=${String(
  //       idrep,
  //     )}&repdata=${String(REPDATA)}&fname=${String(FILENAME)}&cdsotr=${idProfile}`)
  // }

  // получение осмотра для печати
  getExaminationOfPrint(currentProtocol, idrep) {
    const idProfile = localStorage.getItem('cdsotr')
    return this.getData(
      `/examination/rep?cdent=${String(currentProtocol)}&cdotslr=${String(idrep)}&cdsotr=${idProfile}`)
  }

  // экспорт в PDF
  ExaminationInPDF(currentProtocol) {
    return this.getData(`/examination/getRepsInPDF/${currentProtocol}`)
  }

  // получения списка рецептов
  getRecipeList(date) {
    return this.getData('/examination/getlgotreceipt', JSON.stringify(date))
  }

  // получение ссылки на добавление рецепта
  getLinkAddRecipe(date) {
    return this.getData('/examination/addlgotreceipt', JSON.stringify(date))
  }

  // запись данных в БД истории болезни
  addRecipeInDb(date) {
    return this.getData('/examination/setlgotreceipt', JSON.stringify(date))
  }

  // получение ссылки на реактирование-просмотр-печать
  getLinkRecipe(date) {
    return this.getData('/examination/editlgotreceipt', JSON.stringify(date))
  }

  // получение данных для табличного параметра
  getTableParam (data, token) {
    return this.getData('/examination/tableparam/', data, token)
  }

  deleteTableParam (data, token) {
    return this.getData('/examination/tpdelrec/', data, token)
  }

  addTableParam (data, token) {
    return this.getData('/examination/tpinsrec/', data, token)
  }

  updateTableParam (data, token) {
    return this.getData('/examination/tpeditrec/', data, token)
  }

  getParameterOptionsList (idpar) {
    return this.getData(`/examination/jsonbyparamid?paramid=${idpar}`)
  }

  // Получение предпросмотра шаблона печати осмотра
  getPrintTemplatePreview(cdent, cdotslr, repdata, record) {
    return this.getData('/hb_reports/preview_print', {
      cdent,
      cdotslr,
      repdata,
      record,
    });
  }
}

export default new ProtocolsAPI();
