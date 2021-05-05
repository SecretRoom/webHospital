import MainAPI from '../main.api';

class PatientsAPI extends MainAPI {
  /** Получение списка пациентов */
  getPatients(data: any): Promise<Response> {
    return this.getData('/patients', data || {})
  }

  /** Получение пациента */
  getPatient(id: string): Promise<Response> {
    return this.getData(`/patient/${id}`)
  }
}

export default new PatientsAPI();
