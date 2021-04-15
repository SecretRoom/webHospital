
import MainAPI from './main.api';
/**
 * Прием пациентов
 *
 * @class ReceptionAPI
 * @extends {MainAPI}
 */
class ReceptionAPI extends MainAPI {
  // получение списка записанных пациентов
  getAppointmentsList(data) {
    return this.getData('/appointment/PriemList', data);
  }

  getExpectationList(data) {
    return this.getData('/appointment/WaitList', data);
  }

  getExaminedPatientList(data) {
    return this.getData('/appointment/priemchecklist', data);
  }

  cancellationAttendance(data) {
    return this.getData('/appointment/setyavkasotr', data);
  }

  addPatientToQueue(data) {
    return this.getData('/appointment/adddocwaitlist', data);
  }

  getQueueList(date) {
    return this.getData('/appointment/WaitListUser', { date });
  }

  removePatientAtQueue(cdlist) {
    return this.getData('/appointment/docwaitlist_delete', { cdlist });
  }
}

export default new ReceptionAPI();
