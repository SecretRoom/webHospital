import MainAPI from './main.api';

class InvoicesAPI extends MainAPI {
  // Список талонов
  getInvoicesList ({ currentProfile, currentPatient }) {
    return this.getData('/examination/hbtalon', { cdsotr: currentProfile, cdpac: currentPatient });
  }

  // Данные талона
  getInvoice (cddoc) {
    return this.getData('/talon/talon_one', { cddoc })
  }

  // // Справочник результата посещения
  // getSlresultSluch() {
  //   return this.getData('/talon/slresultsluch_compact')
  // }

  // // Список исходов заболевания
  // getSlishodSluch() {
  //   return this.getData('/talon/slishodsluch_compact')
  // }

  // Список исходов заболевания
  getDiseaseOutcomeList(data) {
    return this.getData('/ticket/result_ishod_compact', data)
  }

  // Список для параметра "признак нуждается в санировании полости рта"
  getSanList() {
    return this.getData('/talon/nsan_compact')
  }

  // Список посещений
  getDocTalon(cddoc) {
    return this.getData('/talon/doctalon_pos', { cddoc })
  }

  // Таблица диагнозов
  getDiagnosisTable(cddoc) {
    return this.getData('/talon/doctalon_diagn', { cddoc })
  }

  // Добавление талона
  addInvoice(data) {
    return this.getData('/talon/doctalon_add', data)
  }

  // Удаление талона
  deleteInvoice(data) {
    return this.getData('/talon/doctalon_delete', data)
  }

  // Редактирование талона
  editInvoice(data) {
    return this.getData('/talon/talon_doctor_edit', data)
  }

  // Добавление посещения в таблицу посещений
  addVisit(data) {
    return this.getData('/talon/doctalon_pos_add', data)
  }

  // Удаление посещения из таблицы посещений
  deleteVisit(data) {
    return this.getData('/talon/doctalon_pos_del', data)
  }

  // Удаление диагноза
  deleteDiagnosis(cddia) {
    return this.getData('/talon/talon_doctor_diagn_delete', { cddia })
  }

  // Редактирование диагноза
  editDiagnosis(data) {
    return this.getData('/talon/talon_doctor_diagn_edit', data)
  }

  // Добавление диагноза
  addDiagnosis(data) {
    return this.getData('/talon/talon_doctor_diagn_add', data)
  }

  // Список услуг
  getServiceList(data) {
    // const cddoc = data.cddoc
    return this.getData('/talon/doctalon_uslug', data)
  }

  // Добавление услуги
  addService(data) {
    return this.getData('/talon/talon_doctor_uslug_add', data)
  }

  // Добавление стоматологической услуги
  addDentService(data) {
    return this.getData('/talon/doctalon_stomuslug_add', data)
  }

  // Удаление услуги
  deleteService(cdu) {
    return this.getData('/talon/talon_doctor_uslug_delete', { cdu })
  }

  // Удаление стом. услуги
  deleteStomUslug(data) {
    return this.getData('/talon/doctalon_stomuslug_del', data)
  }

  // Редактирование услуги
  editService(data) {
    return this.getData('/talon/talon_doctor_uslug_edit', data)
  }

  // Закрытие талона
  closeInvoice(cddoc) {
    return this.getData('/talon/talon_doctor_close', { cddoc })
  }
}

export default new InvoicesAPI();
