import MainAPI from '../main.api';

class PatientAPI extends MainAPI {
  /** Получение пациента */
  getPatient(id: string): Promise<Response> {
    return this.getData(`/patients/${id}`)
  }
}

export default new PatientAPI();
