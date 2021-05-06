import MainAPI from '../main.api';

class ExaminationAPI extends MainAPI {
  /** Получение осмотров пациента */
  getExamList(id: string): Promise<Response> {
    return this.getData(`/patients/${id}/examination`)
  }

  createExam(data: any): Promise<Response> {
    return this.getData(`/patients/${data.idPat}/examination/create`, data)
  }

  getExamTypeList(): Promise<Response> {
    return this.getData('/directories/examTypes')
  }
}

export default new ExaminationAPI();
