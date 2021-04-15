import MainAPI from '../main.api';

class DentalTemplatesAPI extends MainAPI {
  /**
   * Получение таблицы зубных шаблонов
   *
   * @returns {object} - таблица
   * @memberof DentalTemplatesAPI
   */
  getDentalTemplates() {
    return this.getData('/directory/get_stom_templ')
  }

  /**
   * Таблица услуг зуба
   *
   * @param {string} data - данные услуг
   * @returns {object} - таблица
   * @memberof DentalTemplatesAPI
   */
  getDentalTemplateServices(data) {
    return this.getData('/directory/get_stom_templ_usl', data)
  }

  /**
   * Удаление шаблона
   *
   * @param {string} cdtmpltth - id шаблона
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  deleteDentalTemplate(cdtmpltth) {
    return this.getData('/directory/del_stom_templ', { cdtmpltth })
  }

  /**
   * Изменение шаблона
   *
   * @param {string} cdtmpltth - id шаблона
   * @param {string} nmtmpltth - имя шаблона
   * @param {string} shdia - диагноз
   * @param {string} shdiafrom - диагноз с
   * @param {string} shdiato - диагноз по
   * @param {string} isprvt - признак частного
   * @param {string} cdsotr - id сотрудника
   * @param {string} cdprof - id профиля
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  editDentalTemplate({
    cdtmpltth,
    nmtmpltth,
    shdia,
    shdiafrom,
    shdiato,
    isprvt,
    cdsotr,
    cdprof,
  }) {
    return this.getData('/directory/post_stom_templ', {
      cdtmpltth,
      nmtmpltth,
      shdia,
      shdiafrom,
      shdiato,
      isprvt,
      cdsotr,
      cdprof,
    })
  }

  /**
   * Сохранение параметра
   *
   * @param {string} cdtmpltth - id шаблона
   * @param {string} cdpar - id параметра
   * @param {string} value - значение параметра
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  saveDentalTemplateParameter({ cdtmpltth, cdpar, value }) {
    return this.getData('/directory/post_stom_templ_param', { cdtmpltth, cdpar, value })
  }

  /**
   * Добавление услуги
   *
   * @param {string} cdtmpltth - id шаблона
   * @param {string} cdobsusl - id услуги
   * @param {number} kolvo - количество
   * @param {string} shdia - диагноз
   * @param {string} cdvopl - id вида оплаты
   * @param {string} cdtoothrezt - id результата лечения, null если нет
   * @param {number} isplomb - признак пломбированного, null если нет
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  addDentalTemplateService({
    cdtmpltth,
    cdobsusl,
    kolvo,
    shdia,
    cdvopl,
    cdtoothrezt,
    isplomb,
  }) {
    return this.getData('/directory/add_stom_templ_usl', {
      cdtmpltth,
      cdobsusl,
      kolvo,
      shdia,
      cdvopl,
      cdtoothrezt,
      isplomb,
    })
  }

  /**
   * Удаление услуги
   *
   * @param {string} cdtmpltth - id шаблона
   * @param {string} cdobsusl - id услуги
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  deleteDentalTemplateService({
    cdtmpltth,
    cdobsusl,
  }) {
    return this.getData('/directory/del_stom_templ_usl', {
      cdtmpltth,
      cdobsusl,
    })
  }

  /**
   * Список профилей ЛПУ
   *
   * @param {string} prof_text - строка для поиска профиля
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  getReportProfiles(data) {
    return this.getData('/directory/dictionaries/get_lpu_report_profiles/', { prof_text: data })
  }

  /**
   * Список услуг
   *
   * @param {string} date - дата
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  getTeethServicesList(date) {
    return this.getData(`/examination/stomuslug/${date}`)
  }

  /**
   * Список видов оплаты
   *
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  getPaymentList() {
    return this.getData('/examination/jsonsprav/slvopl/')
  }

  /**
   * Список результатов лечения
   *
   * @returns результат
   * @memberof DentalTemplatesAPI
   */
  getTreatmentResultList() {
    return this.getData('/examination/toothsprav/toothrez')
  }
}
export default new DentalTemplatesAPI();
