/* eslint-disable class-methods-use-this */
import MainAPI from '../main.api';
import { DirectionsOriginData, VotingData } from '../../../containers/MedicalCommission/interfaces';
/**
 * API для получения данных назначений на ВК
 *
 * @class CommissionAPI
 * @extends {MainAPI}
 */
class CommissionAPI extends MainAPI {
  /** Получение списка назначений */
  async getDirectionsData(data: {
    dbegin: string,
    dend: string,
    drogd: string,
    famip: string,
    namep: string,
    otchp: string,
    cdcmp: any,
    onlydirect: number,
  }): Promise<DirectionsOriginData> {
    return this.getData('/commission/direct_list', data)
  }

  /** Получение списка сотрудников ВК */
  getCommissionStaff(commissionSelect: string): Promise<Response> {
    return this.getData(`/commission/commission_sotr/${commissionSelect}`)
  }

  /** Добавить в график ВК */
  addToSchedule(data: any): Promise<Response> {
    return this.getData('/commission/add', data)
  }

  /** Редактировать в графике ВК */
  editFromSchedule(data: any): Promise<Response> {
    return this.getData('/commission/edit', data)
  }

  /** Редактировать примечание в графике ВК */
  editNoteFromSchedule(data: {
    cdent_napr: string,
    prim: string,
  }[]): Promise<Response> {
    return this.getData('/commission/edit_vk_pac_note', data)
  }

  /** Удалить из графика ВК */
  removeFromSchedule(cdsotr: string, cddcm: string): Promise<Response> {
    return this.getData('/commission/del', { cdsotr, cddcm })
  }

  /** Получение графика ВК */
  getSchedule(cdsotr: string): Promise<Response> {
    return this.getData('/commission/list', { cdsotr })
  }

  /** Получение данных назначений для редактирования ВК */
  getDirectionDataForUpdate(cddcm: string): Promise<Response> {
    return this.getData('/commission/list_pac_vk', { cddcm })
  }

  /** Получение списка вариантов печати в графике вк */
  getReportsForPrint(cddcm: string): Promise<Response> {
    return this.getData('/commission/carry_out_commission_report', { cddcm })
  }

  /** Редактирование флага активного сотрудника для подписи ВК */
  editChairman(data: any): Promise<Response> {
    return this.getData('/commission/edit_chairman', data)
  }

  /** Получение дефолтных данных для создания ВК */
  getDefaultDataForCreate(data: any): Promise<Response> {
    return this.getData('/commission/commission_default_date', { items: data })
  }

  /** Получение графика ВК в работе */
  getInWorkSchedule(data: any): Promise<Response> {
    return this.getData('/commission/getlistcommission_inwork', data)
  }

  /** Получение графика проведенных ВК */
  getCarriedOutSchedule(data: any): Promise<Response> {
    return this.getData('/commission/getlistcommission_done', data)
  }

  /** Voting */
  /** Получение графика ВК */
  getVotingSchedule(cdsotr: string): Promise<Response> {
    return this.getData('/commission/list_for_sotr', { cdsotr })
  }

  /** Голосование */
  voting(data: VotingData|any): Promise<Response> {
    return this.getData('/commission/vote_sotr', data)
  }

  /** Получение названия и типа ВК */
  getVotingType(cdsotr: string): Promise<Response> {
    return this.getData('/commission/filtr_for_vote_sotr', { cdsotr })
  }

  /** Подпись */
  signingVoting(data: any): Promise<Response> {
    return this.getData('/commission/signing_vk', data)
  }

  /** Reports */
  /** Получение типов ВК */
  getTypeMC(cdsotr: string): Promise<Response> {
    return this.getData('/commission/filtr_type_commis', { cdsotr })
  }

  /** Получение типов ВК */
  getTitleMC(cdcmt: string): Promise<Response> {
    return this.getData('/commission/filtr_list_commis_type', { cdcmt })
  }

  /** Получение типов отчетов */
  getTypeReportsMC(cdcmt: string): Promise<Response> {
    return this.getData('/commission/filtr_list_reptype', { cdcmt })
  }

  /** Reports Print Settings */
  /** Получение текста шаблона */
  getReportTemplate(id: string): Promise<Response> {
    return this.getData(`/hb_reports/get_temp_report?cdhbr=${id}`)
  }

  /** Предпросмотр шаблона */
  getReportTemplatePreview(data: any): Promise<Response> {
    return this.getData('/hb_reports/slhbreports_preview_print', data)
  }

  /** Сохранить текст шаблона */
  saveReportTemplate(data: any): Promise<Response> {
    return this.getData('/hb_reports/save_temp_slhbreports', data)
  }

  /** Получение данных JSON */
  getReportJsonData(data: any): Promise<Response> {
    return this.getData('/hb_reports/get_getreport_slhbreports', data)
  }

  /** Получение данных SQL-запросов */
  getReportSqlData(data: any): Promise<Response> {
    return this.getData('/hb_reports/get_slhbreport_det', data)
  }

  /** Добавление SQL-запроса */
  addReportSql(data: any): Promise<Response> {
    return this.getData('/hb_reports/add_slhbreport_det', data)
  }

  /** Изменение SQL-запроса */
  updateReportSql(data: any): Promise<Response> {
    return this.getData('/hb_reports/update_slhbreport_det', data)
  }

  /** Удаление SQL-запроса */
  deleteReportSql(data: any): Promise<Response> {
    return this.getData('/hb_reports/del_slhbreport_det', data)
  }

  /** Создание отчета ВК */
  createReport(data: any): Promise<Response> {
    return this.getData('/hb_reports/slhbreports_typerep_add_report', data)
  }

  /** Удаление отчета ВК */
  deleteReport(data: any): Promise<Response> {
    return this.getData('/hb_reports/del_slhbreports', data)
  }

  /** TimeSheet */
  /** Получение данных табеля на дату */
  getTimeSheetList(dt: string): Promise<Response> {
    return this.getData('/commission/sotrworkdays_get', { dt })
  }

  /** Создание нового листа табеля на дату */
  createTimeSheetList(dt: string): Promise<Response> {
    return this.getData('/commission/sotrworkdays_newlist', { dt })
  }

  /** Смена отметки в табеле для сотрудника */
  changeTimeSheetListPresent(cd: string, ispresent: string | number): Promise<Response> {
    return this.getData('/commission/sotrworkdays_presence_updt', { cd, ispresent })
  }

  /** Получение дефолтных номеров ВК */
  getDefaultNumsMC(ddate: string): Promise<Response> {
    return this.getData('/commission/commission_default_nums', { ddate })
  }

  /** Получение типов ВК */
  getTypesMC(): Promise<Response> {
    return this.getData('/commission/get_type_commission_for_user')
  }

  updateStaffMC(data: any): Promise<Response> {
    return this.getData('/commission/update_slcommissionsotr', data)
  }
}

export default new CommissionAPI();
