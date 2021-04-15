/* eslint-disable class-methods-use-this,camelcase */
import MainAPI from './main.api';

/**
 * API для расписания, записи на прием и анализов
 *
 * @class ScheduleAPI
 * @extends {MainAPI}
 */
class ScheduleAPI extends MainAPI {
    /**
     * Метод для получения сетки расписания
     *
    * @sotr список сотрудников
    * @prof список профилей
    * @filial список филиалов
    * @dateStart Расписание "С"
    * @count количество дней
    * @memberof ScheduleAPI
    */
    getSchedule = (
      sotr,
      prof = '',
      filial = '',
      dateStart,
      count,
      token,
    ) => this.getData(
      '/appointment/lpu',
      JSON.stringify({
        sotr,
        prof,
        filial,
        dateStart,
        count,
      }),
      { cancelToken: token },
    );

    /**
     * Метод для запроса дерева анализов (без показателей)
     *
    * @lpu текущий код ЛПУ, по умолчанию текущий
    * @sotr код сотрудника, по умолчанию текущий
    */
    getAnalysisTree = (
      lpu = localStorage.getItem('cdlpu'),
      sotr = localStorage.getItem('cdsotr'),
    ) => this.getData(
      '/uslugi/analysis',
      JSON.stringify({
        lpu,
        sotr,
      }),
    );

    /**
     *  Метод для запроса показателей анализа
     *
     * @cdusl {*} код анализа
     */
    getParamsForAnalysis = (
      cdusl,
    ) => this.getData(
      '/uslugi/paramsForAnalysis',
      JSON.stringify({
        cdusl,
      }),
    );

    /**
     * Метод для создания документа для анализа. Вызывается после записми на анализы
     *
    * @cdsotr код сотрдуника, который записывает
    * @cdpriem код ячейки
    */
    makeAnalyses = (
      cdsotr,
      cdpriem,
    ) => this.getData(
      '/examination/makeanalyses',
      JSON.stringify({
        cdsotr,
        cdpriem,
      }),
    );

  /**
   * Метод для запроса списка профилей
   *
   */
  getProfilsList() {
    return this.getData('/appointment/lpu/allProfiles')
  }

  /**
   * Метод для запроса списка сотрудников
   *
   */
  getSotrList() {
    return this.getData('/appointment/lpu/allSotr')
  }

  updateDopinfo = (
    dopinfo,
    cdpriem,
  ) => this.getData(
    '/appointment/updatedopinfo',
    JSON.stringify({
      dopinfo,
      cdpriem,
    }),
  );

  /**
   * Метод для запроса списка статусов приёма
   *
   */
  getStatusList() {
    return this.getData('/appointment/lpu/slstatuspriem')
  }

  updateStatus = (
    cdpriem,
    prvizit,
  ) => this.getData(
    '/appointment/updatedopinfo',
    JSON.stringify({
      cdpriem,
      prvizit,
    }),
  );

      /**
     * Метод для удаления документа для анализа. Вызывается до записми на анализы
     *
    * @cdsotr код сотрдуника, который записывает
    * @cdpriem код ячейки
    */
    deleteAnalyses = (
      cdsotr,
      cdpriem,
      checked = true,
    ) => this.getData(
      '/examination/deleteanalyses',
      JSON.stringify({
        cdsotr,
        cdpriem,
        checked,
      }),
    );

  /**
     * Метод для записи на прием
     *
    * @cdpac_UID код пациента
    * @cdpriem код ячейки
    * @spis_cdusl_UID услуги
   * @time длительность услуг
   * @cdstatuspriem статус приёма
   * @zadach код задачи
    */
    make = (
      cdpac_UID,
      cdpriem,
      spis_cdusl_UID,
      time,
      cdstatuspriem,
      zadach,
    ) => this.getData(
      '/appointment/make',
      JSON.stringify({
      cdpac_UID,
      cdpriem,
      spis_cdusl_UID,
      time,
      cdstatuspriem,
      zadach,
      }),
    );
}

export default new ScheduleAPI();
