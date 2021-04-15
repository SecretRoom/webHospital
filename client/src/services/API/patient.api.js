import MainAPI from './main.api';

class PatientPersonalDataAPI extends MainAPI {
  // Метод для получения личных данных пациента
  getPersonalData (currentPatient) {
    return this.getData(`/patient/json/${currentPatient}/`);
  }

  // Метод для получения списка документов
  getDocList () {
    return this.getData('/patient/jsonsprav/sldocum/')
  }

  // Сохранить измененные данные
  updatePersonalData (currentPatient, data) {
    return this.getData(`/patient/json/${currentPatient}/`, data)
  }

  // Метода для получения списка типов полиса
  getPolisTypeList (token) {
    return this.getData('/patient/jsonsprav/sltypepoli/', null, { cancelToken: token })
  }

  // Метод для получения списка страховых компаний
  getPolisStrahList (token) {
    return this.getData('/patient/jsonsprav/slstrah/', null, { cancelToken: token })
  }

  // Диспансерный учет пациента
  getDisp (cdpac, cdsotr, token) {
    return this.getData('/patient/disp', { cdpac, cdsotr }, { cancelToken: token })
  }

  // Поставить на дисп. учет пациента
  setDisp (data, token) {
    return this.getData('/patient/dispset', data, { cancelToken: token })
  }

  // Снять с дисп. учета пациента
  deregisterDisp (data, token) {
    return this.getData('/patient/dispoff', data, { cancelToken: token })
  }

  // Список явок по дисп. учету
  dispDates (cdpacdisp, cdsotr, token) {
    return this.getData('/patient/dispdates', { cdpacdisp, cdsotr }, { cancelToken: token })
  }

  // Редактирование явки из списка явок дисп. учета
  dispDateEdit (record, cdsotr, token) {
    return this.getData('/patient/dispdateedit', { record, cdsotr }, { cancelToken: token })
  }

  // Удаление явки из списка явок дисп. учета
  dispDateDel (data, token) {
    return this.getData('/patient/dispdatedel', data, { cancelToken: token })
  }

  // Удаление записи о диспансерном учете
  dispDelete (data, token) {
    return this.getData('/patient/dispdel', data, { cancelToken: token })
  }

  // Редактирование постановки на учет
  dispEdit (data, token) {
    return this.getData('/patient/dispsetedit', data, { cancelToken: token })
  }

  // Метод для получения списка статусов пациента
  getPatientData (currentPatient) {
    return this.getData(`/patient/${currentPatient}`)
  }

  // метод для получения справочника услуг
  getCatalogServices (token, date) {
    return this.getData(`/examination/uslug/${date}`, null, { cancelToken: token })
  }

  // метод для получения списка услуг
  getServicesData (data, token) {
    return this.getData('/examination/getuslpar', data, { cancelToken: token })
  }

  // метод для добавления услуги
  createServicesData (data, token) {
    return this.getData('/examination/adduslpar', data, { cancelToken: token });
  }

  // метод для редактирование услуги
  editServiceData (data, token) {
    return this.getData('/examination/edituslpar', data, { cancelToken: token });
  }

  // метод для удаления услуги
  deleteServiceData (data, token) {
    return this.getData('/examination/deleteuslpar', data, { cancelToken: token });
  }

  // получение id авторизованного сотрудника
  getCurrentProfile () {
    return this.getData('/auth/otdproflist');
  }

  // получаение списка страховых компааний
  getListCompStrah(token) {
    return this.getData('/patient/strah', null, { cancelToken: token })
  }

  // получение списка полисов
  getListPolis(data, token) {
    return this.getData('/patient/polis', data, { cancelToken: token })
  }

  // удаление полиса
  deletePolis(data, token) {
    return this.getData('/patient/polisdel', data, token)
  }

  // редактирование полиса
  editPolis(data, token) {
    return this.getData('/patient/polisedit', data, { cancelToken: token })
  }

  // добавление полиса
  addPolis(data, token) {
    return this.getData('/patient/polisadd', data, { cancelToken: token })
  }
}

export default new PatientPersonalDataAPI();
