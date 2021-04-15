
import MainAPI from './main.api';

/**
 * Для работы с сотрудниками (POSTGRE)
 *
 * @class EmployeeAPI
 * @extends {MainAPI}
 */
class EmployeeAPI extends MainAPI {
  /**
   * Метод для получения списка ВСЕХ сотрудников этого ЛПУ (параметр ЛПУ подставляется на сервере)
   *
   * @memberof EmployeeAPI
   */
  getAllEmployees() {
    return this.getData('/uslugi/all_sotr_for_lpu', {
    });
  }

  /**
   * Метод для получения списка НЕУВОЛЕННЫХ сотрудников этого ЛПУ с признаком "можно показывать в сетке"
   * @returns {Promise}
   */
  getWorkingEmployees() {
    return this.getData('/uslugi/sotr_for_dgp', {
    });
  }
}

window.api = new EmployeeAPI();

export default new EmployeeAPI();
