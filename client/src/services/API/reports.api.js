import MainAPI from './main.api';

class ReportsAPI extends MainAPI {
  // Получение списка отчетов
  getReportsList() {
    return this.getData('/hb_reports/list')
  }

  // Получение списка параметров для отчета
  getReportsParameterList(data) {
    return this.getData(`/hb_reports/params?cdhbr=${data}`)
  }

  // Получение данных отчета
  getReport(data) {
    return this.getData('/hb_reports/getreport', data)
  }
}

export default new ReportsAPI();
