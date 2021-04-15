import MainAPI from './main.api';

class MailMonitoringAPI extends MainAPI {
  // Получение списка готовых анализов и лога рассылки
  getAnalysisLogList(data) {
    return this.getData('/laboratory/sending_analyzes_log', data)
  }

  // Сохранение email пациента
  savePatientEmail(data) {
    return this.getData('/laboratory/set_pacient_email', data)
  }

  // Сохранение статуса рассылки email
  saveStatusEmail(data) {
    return this.getData('/laboratory/set_email_status', data)
  }
}

export default new MailMonitoringAPI()
