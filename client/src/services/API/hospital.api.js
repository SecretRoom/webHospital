import MainAPI from './main.api';

class HospitalAPI extends MainAPI {
  // сприсок направленных пациентов
  fetchPatientList(data) {
    return this.getData('/statsionar/doctor_pacient_list_priemnik', data)
  }

  // информация по отделению
  fetchInformation(data) {
    return this.getData('/statsionar/branchinformation', { cdotdel: data })
  }

  // данные для формы приема пацинета в отделение
  fetchPatientData(data) {
    return this.getData('/statsionar/pacient_priemnik', { cdreg: data })
  }

  // сприсок сотрудников
  fetchSotr(data) {
    return this.getData('/statsionar/sotr_by_cdotdel_compact', { cdotdel: data })
  }

  // сприсок профилей
  fetchProf(data) {
    return this.getData('/statsionar/prof_by_cdotdel_compact', { cdotdel: data })
  }

  // сприсок свободных коек
  fetchVacanciesList(otdel, prof) {
    return this.getData('/statsionar/list_free_koik', { cdotdel: otdel, cdprof: prof, noprofcheck: '0' })
  }

  // принять пациента в отделение
  addPatient(data) {
    return this.getData('/statsionar/pacient_add', data)
  }

  // сприсок пациентов в отделении
  fetchListOtdel(data) {
    return this.getData('/statsionar/doctor_pacient_list_otdel', data)
  }

  // спарвочники для формы выписки пацента из отделения
  fetchState() {
    return this.getData('/statsionar/sostpac_compact', {})
  }

  fetchStatsionar(data) {
    return this.getData('/statsionar/statsionar_one', { cddoc: data })
  }

  fetchIshod() {
    return this.getData('/statsionar/ishods_compact', {})
  }

  fetchLPU() {
    return this.getData('/statsionar/lpu_perevod_compact', {})
  }

  fetchMRT(data) {
    return this.getData('/statsionar/critv024_ep_compact', { dat: data })
  }

  fetchPBT(data) {
    return this.getData('/statsionar/critv024_pbt_compact', { dat: data })
  }

  fetchVMP(data) {
    return this.getData('/statsionar/vmp_compact', data)
  }

  fetchMGI(data) {
    return this.getData('/statsionar/critv024_mgi_compact', { dat: data })
  }

  fetchIF (data) {
    return this.getData('/statsionar/critv024_if_compact', { dat: data })
  }

  fetchMT (data) {
    return this.getData('/statsionar/critv024_mt_compact', { dat: data })
  }

  fetchSH (data) {
    return this.getData('/statsionar/critv024_sh_compact', { dat: data })
  }

  fetchVdia () {
    return this.getData('/statsionar/vdia_compact', { })
  }

  fetchRB (data) {
    return this.getData('/statsionar/critv024_rb_compact', { dat: data })
  }

  fetchKSG (data) {
    return this.getData('/statsionar/ksg_compact', data)
  }

  fetchResult () {
    return this.getData('/statsionar/resultsluch_compact', {})
  }

  fetchProsn () {
    return this.getData('/statsionar/prosn_compact', {})
  }

  fetchOtdel () {
    return this.getData('/statsionar/slotdel_compact', {})
  }

  fetchProfList (cdperotd) {
    return this.getData('/statsionar/slprof_compact', { cdotdel: cdperotd })
  }

  // таблица сопутствующих диагнозов
  fetchDocDiagn (data) {
    return this.getData('/statsionar/doctor_docdiagn_by_cddoc', { cddoc: data })
  }

  // добавить сопутствующий диагноз
  addDocDiagn (id, diagn, type) {
    return this.getData('/statsionar/docdiagn_add', { cddoc: id, shdia: diagn, prosn: type })
  }

  // редактировать сопутствующий диагноз
  editDocDiagn (id, diagn, type) {
    return this.getData('/statsionar/docdiagn_edit', { cddia: id, shdia: diagn, prosn: type })
  }

  // удалить сопутствующий диагноз
  deleteDocDiagn (id) {
    return this.getData('/statsionar/docdiagn_delete', { cddia: id })
  }

  // выписать пациента
  dischargePatient (data) {
    return this.getData('/statsionar/pacient_vypiska', data)
  }

  // таблица движений пациентов
  fetchMovingPac (data) {
    return this.getData('/statsionar/doctor_pacient_find', data)
  }

  // отмена выписки
  cancelDischarge (id) {
    return this.getData('/statsionar/pacient_delete', { cddoc: id })
  }

  // список секций для листа назначений
  fetchSections (id, lpu) {
    return this.getData('/stacmedsestr/get_sections', { cdlpu: lpu, cddoc: id })
  }

  // таблица листа наблюдений
  fetchObservData (id) {
    return this.getData('/stacmedsestr/get_temperaturelist_pac', { cddoc: id })
  }

  // данные о пациенте для листа наблюдений и назначений
  fetchPatientInfo (id) {
    return this.getData('/stacmedsestr/get_data_patient', { cddoc: id })
  }

  // удалить наблюдение
  delTemperatureList (id) {
    return this.getData('/stacmedsestr/del_temperature_list', id)
  }

  // автозаполнение листа наблюдений
  autoFillTemperList (id, date, sotr, md, timeBeg, timeEnd) {
    return this.getData('/stacmedsestr/autofill_temperaturelist_pac', {
      cddoc: id, end_day: date, cdsotr: sotr, mothers_day: md, time_morning: timeBeg, time_evening: timeEnd,
    })
  }

  // добавление записи в лист наблюдений
  addObservation (data) {
    return this.getData('/stacmedsestr/insert_data_of_temperaturelist', data)
  }

  // редактирования записи в листе наблюдений
  editObservation (data) {
    return this.getData('/stacmedsestr/change_temperature_list', data)
  }

  // день матери
  getMothersDay (id) {
    return this.getData('/stacmedsestr/get_mothers_day_list', { cddoc: id })
  }

  // дерево для добавления назначения
  openSect (id) {
    return this.getData('/stacmedsestr/open_section', { cdsection: id })
  }

  // данные по ячейке
  getNerse (id, date) {
    return this.getData('/stacmedsestr/get_nurse_prescripts_in_cell', { cddp: id, planneddate: date })
  }

  fetchVidolp (id) {
    return this.getData('/stacmedsestr/get_vidopl', { cdlpu: id })
  }

  delOrCancelNerse (flag, array) {
    return this.getData('/stacmedsestr/del_or_cancel_nursepresc', { del_or_cancel: flag, nurseprescripts: array })
  }

  fetchDocprescript (section, id) {
    return this.getData('/stacmedsestr/get_doc_prescripts_list', { cdsection: section, cddoc: id })
  }

  delOrCancelDocpresc (type, array) {
    return this.getData('/stacmedsestr/del_or_cancel_docpresc', { del_or_cancel: type, docprescripts: array })
  }

  donePresc (data) {
    return this.getData('/stacmedsestr/done_prescripts', data)
  }

  needDebit (id, item, flag) {
    return this.getData('/stacmedsestr/needdebit_check', { cddoc: id, cdprescript: item, needdebit: flag })
  }

  fetchTaking (lpu) {
    return this.getData('/stacmedsestr/get_taking_way', { cdlpu: lpu })
  }

  fetchVoplApt () {
    return this.getData('/stacmedsestr/get_vidopl_apteka', {})
  }

  fetchMaterial (otdel, matname, ex, razd, check) {
    return this.getData('/stacmedsestr/get_materialcards',
     { cdotdel_apteka: otdel, name: matname, exist: ex, razdel: razd, check_search_begin: check })
  }

  getRazdel () {
    return this.getData('/stacmedsestr/get_razdel_apteka', {})
  }

  addDocpresc (data) {
    return this.getData('/stacmedsestr/add_docprescripts', data)
  }

  fetchDataForChange (data) {
    return this.getData('/stacmedsestr/open_docpresc_for_change', data)
  }

  fetchParamList (id) {
    return this.getData('/stacmedsestr/params_output_fields', { cdnode: id })
  }
}

export default new HospitalAPI();
