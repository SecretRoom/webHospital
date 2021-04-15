import { ParameterUpdateDataType } from '../../../containers/ProtocolsV2/types';
/* eslint-disable class-methods-use-this */
import MainAPI from '../main.api';

export interface ResponseListType {
  items: any
  status: number
}

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
  getProtocolList(id: string): Promise<ResponseListType> {
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
  getProtocolData(id: string): Promise<ResponseType> {
    return this.getData(`/examination/json/${id}/`);
  }

  getMainDirectories(): Promise<any> {
    return Promise.all([
      this.getData('/examination/jsonsprav/slmestpos/'),
      this.getData('/examination/jsonsprav/slprich/'),
      this.getData('/examination/jsonsprav/slvopl/'),
    ])
  }

  // Обновление параметра осмотра
  // Прнимает
  // cdent  код осмотра
  // сdpar  код параметра
  // value  новое значение параметра
  // возврвщает json с результататми выполнения status message
  updateParameter(data: ParameterUpdateDataType): Promise<ResponseType> {
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
  updateProtocolData(cdent: string, data: any): Promise<any> {
    return this.getData(`/examination/json/${cdent}/`, data);
  }

  // создать осмотр
  createProtocol(cdpac: string, cdobstype: string, cdsotr: string): Promise<ResponseType> {
    return this.getData('/examination/addexam/', {
      cdpac,
      cdobstype,
      cdsotr,
    });
  }

  // Удаление осмотра по ID(cdent) осмотра
  deleteProtocol(cdent: string, cdsotr: string): Promise<ResponseType> {
    return this.getData('/examination/delexam/', {
      cdent,
      cdsotr,
    });
  }

  /**
   * Метод для компирования протокола
   *
   * @param {*} cdent - id протокола
   * @param {string} [cdsotr=localStorage.getItem('cdsotr')] - id сотрудника
   * @returns результат операции
   * @memberof ProtocolsAPI
   */
  copyProtocol(cdent: string, cdsotr: string): Promise<ResponseType> {
    return this.getData('/examination/copyexam/', {
      cdent,
      cdsotr,
    });
  }

  // Подписать осмотр по ID(cdent) осмотра
  signProtocol(idProtocol: string, idProfile: string): Promise<ResponseType> {
    return this.getData('/examination/signexam/', { cdent: idProtocol, cdsotr: idProfile });
  }

  // Снять подпись по ID(cdent) осмотра
  unsignProtocol(data: {
    cdent: string
    cdsotr: string
  }): Promise<ResponseType> {
    return this.getData('/examination/unsignexam/', data);
  }

  /**
   * Метод для получения списка печатных шаблонов по типу осмотра
   *
   * @param {string} id - cdobstype текущий тип осмотра
   * @returns {array} - список печатных шаблонов
   * @memberof ProtocolsAPI
   */
  getPrintTemplateList(id: string): Promise<ResponseType> {
    return this.getData(`/hb_reports/list_temp_with_text?cdobstype=${id}`);
    // return this.getData(`/hb_reports/list_temp?cdobstype=${id}`);
  }

  /**
   * Метод для получения текста печатного шаблона
   *
   * @param {string} id - cdotslr id шаблона осмотра
   * @returns {string} - html представление печатного шаблона
   * @memberof ProtocolsAPI
   */
  getPrintTemplateText(id: string): Promise<ResponseType> {
    return this.getData(`/hb_reports/get_temp?cdotslr=${id}`);
  }

  /**
   * Метод для создания нового печатного шаблона
   *
   * @param {string} cdobstype - id текущего типа осмотра
   * @param {string} repname - наименование шаблона
   * @param {string} repdata - доп запрос с данными
   * @param {string} filename - наименование файла
   * @returns {string} - cdotslr нового шаблона
   * @memberof ProtocolsAPI
   */
  createPrintTemplate(cdobstype: string, repname: string, repdata: string, filename: string): Promise<ResponseType> {
    return this.getData('/hb_reports/add_slotstylerep', {
      cdobstype,
      repname,
      repdata,
      filename,
    });
  }

  /**
   * Метод для редактирования параметров печатного шаблона
   *
   * @param {string} cdotslr - id текущего шаблона
   * @param {string} cdotsl - id для привязки к типу осмотра
   * @param {string} repname - наименование шаблона
   * @param {string} repdata - доп запрос с данными
   * @param {string} filename - наименование файла
   * @returns - результат
   * @memberof ProtocolsAPI
   */
  editPrintTemplate(cdotslr: string, cdotsl: string, repname: string, repdata: string, filename: string): Promise<ResponseType> {
    return this.getData('/directory/dictionaries/change_report_template/', {
      cdotslr,
      cdotsl,
      repdata,
      filename,
      repname,
    });
  }

  /**
   * Метод для сохранения текста печатного шаблона
   *
   * @param {string} cdotslr - id текущего шаблона
   * @param {string} record - текст шаблона
   * @returns - результат
   * @memberof ProtocolsAPI
   */
  savePrintTemplate(cdotslr: string, record: string): Promise<ResponseType> {
    return this.getData('/hb_reports/save_temp', {
      cdotslr,
      record,
    });
  }

  /**
   * Метод для удаления печатного шаблона
   *
   * @param {string} cdotslr - id шаблона осмотра
   * @param {string} cdsotr - id сотрудника
   * @returns - результат
   * @memberof ProtocolsAPI
   */
  deletePrintTemplate(cdotslr: string, cdsotr: string): Promise<ResponseType> {
    return this.getData('/hb_reports/del_slotstylerep', {
      cdotslr,
      cdsotr,
    });
  }

  /**
   * Метод для предпросмотра печатного шаблона
   *
   * @param {string} cdent - id осмотра
   * @param {string} repdata - доп запрос с данными
   * @param {string} record - текстовое представление шаблона
   * @returns {string} - результат
   * @memberof ProtocolsAPI
   */
  getPrintTemplatePreview(cdent: string, repdata: string, record: string): Promise<ResponseType> {
    return this.getData('/hb_reports/preview_print', {
      cdent,
      repdata,
      record,
    });
  }

  // // Список файлов

  // // удалить файл из протокола осмотра
  // // Принимает id сотрудника(cdsotr), id файла(cdfile)
  // deleteFile(employeeId, fileId) {
  //   return this.getData(
  //     '/examination/delfileparam',
  //     JSON.stringify({
  //       cdsotr: employeeId,
  //       cdfile: fileId,
  //     }),
  //   );
  // }

  // getListOfDiagnosis(token) {
  //   return this.getData({
  //     url: '/directory/listSprav/sldiagn/',
  //     params: { cancelToken: token },
  //   });
  // }

  // // Метод для получения списка шаблонов
  // getTemplList(currentProtocol, nmtempl, privateFlag, token) {
  //   return this.getData(`/examination/getEntryTemplList?cdent=${currentProtocol}&nmtempl=${nmtempl}&private_flag=${privateFlag}`,
  //     null,
  //     { cancelToken: token })
  // }

  // // Применение выбранного шаблона
  // applyTempl(currentProtocol, templId, token) {
  //   return this.getData(`${'/examination/ApplyEntryTempl?'
  //   + '&cdent='}${currentProtocol
  //   }&cdtempl=${templId}`, {}, { cancelToken: token })
  // }

  // // Создание нового шаблона
  // saveNewTempl(cdent, nmtempl, pol, agefrom, ageto, shdiafrom, shdiato, privateFlag, prof, token) {
  //   return this.getData(`${'/examination/SaveNewEntryTempl?'
  //   + 'cdent='}${cdent
  //   }&nmtempl=${nmtempl
  //   }&pol=${pol
  //   }&agefrom=${agefrom
  //   }&ageto=${ageto
  //   }&shdiafrom=${shdiafrom
  //   }&shdiato=${shdiato
  //   }&private_flag=${privateFlag
  //   }&prof=${prof}`,
  //   JSON.stringify({
  //     cdent,
  //     nmtempl,
  //   }),
  //   { cancelToken: token })
  // }

  // // получение данных для создания осмотра
  // getOtList(cdpac, token) {
  //   return this.getData('/examination/getotlist', { cdpac, cdsotr: localStorage.getItem('cdsotr') }, { cancelToken: token })
  // }

  // // получение списка осмотров для печати
  // getListExaminationOfPrint(currentProtocol) {
  //   return this.getData(`/examination/getRepList/${currentProtocol}/`)
  // }

  // // получение осмотра для печати
  // getExaminationOfPrint(currentProtocol, REPDATA, FILENAME, idrep, idProfile = localStorage.getItem('cdsotr')) {
  //   return this.getData(
  //     `/examination/rep?cdent=${String(currentProtocol)}&idRep=${String(
  //       idrep,
  //     )}&repdata=${String(REPDATA)}&fname=${String(FILENAME)}&cdsotr=${idProfile}`)
  // }

  // // экспорт в PDF
  // ExaminationInPDF(currentProtocol) {
  //   return this.getData(`/examination/getRepsInPDF/${currentProtocol}`)
  // }

  // // получения списка рецептов
  // getRecipeList(date) {
  //   return this.getData('/examination/getlgotreceipt', JSON.stringify(date))
  // }

  // // получение ссылки на добавление рецепта
  // getLinkAddRecipe(date) {
  //   return this.getData('/examination/addlgotreceipt', JSON.stringify(date))
  // }

  // // запись данных в БД истории болезни
  // addRecipeInDb(date) {
  //   return this.getData('/examination/setlgotreceipt', JSON.stringify(date))
  // }

  // // получение ссылки на реактирование-просмотр-печать
  // getLinkRecipe(date) {
  //   return this.getData('/examination/editlgotreceipt', JSON.stringify(date))
  // }

  // // получение данных для табличного параметра
  // getTableParam (data, token) {
  //   return this.getData('/examination/tableparam/', data, token)
  // }

  // deleteTableParam (data, token) {
  //   return this.getData('/examination/tpdelrec/', data, token)
  // }

  // addTableParam (data, token) {
  //   return this.getData('/examination/tpinsrec/', data, token)
  // }

  // updateTableParam (data, token) {
  //   return this.getData('/examination/tpeditrec/', data, token)
  // }

  // getParameterOptionsList (idpar) {
  //   return this.getData(`/examination/jsonbyparamid?paramid=${idpar}`)
  // }
}

export const protocolsAPI = new ProtocolsAPI()

export default protocolsAPI
