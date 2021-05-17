import MainAPI from '../main.api';

class ReportsAPI extends MainAPI {
  getReport(data: any): Promise<Response> {
    return this.getData('/report', data)
  }
}

export default new ReportsAPI();
