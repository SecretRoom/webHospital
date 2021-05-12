import MainAPI from '../main.api';

class AnalyzesAPI extends MainAPI {
  /** Получение списка анализов */
  getAnalyzesList(): Promise<Response> {
    return this.getData('/directories/analyzes')
  }

  getScheduleAnalyzes(data: any): Promise<Response> {
    return this.getData('/schedule_analyzes', data)
  }

  addAnalysis(data: {
    idAnalysis: string,
    count: string,
    date: string,
    idPat: string,
    idEmpl: string,
  }): Promise<Response> {
    return this.getData('/schedule_analyzes/create', data)
  }
}

export default new AnalyzesAPI();
