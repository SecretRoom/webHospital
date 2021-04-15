import MainAPI from './main.api';

class OrganizationsAPI extends MainAPI {
  // ситилаб

  /**
   * Ситилаб. Получения дерева услуг
   *
   * @returns {array} - дерево услуг
   * @memberof OrganizationsAPI
   */
  getCitilabTree() {
    return this.getData('/citilab_int/tree');
  }

  /**
   * Ситилаб. Получение доп полей услуги по id
   *
   * @param {string} id - id услуги
   * @param {string} cdpac - id пациента
   * @returns {object} - список биоматериалов и доп полей
   * @memberof OrganizationsAPI
   */
  getCitilabBiomat({ id, cdpac }) {
    return this.getData('/citilab_int/biomat_userfield', { id, cdpac });
  }

  /**
   * Ситилаб. Получение записей существующих назначений по коду пациента
   *
   * @param {string} cdpac - id пациента
   * @returns {object} - записи назначений
   * @memberof OrganizationsAPI
   */
  getCitilabList(cdpac) {
    return this.getData('/citilab_int/list_pr_app', { cdpac });
  }

  /**
   * Ситилаб. Удаление назначения по его ид
   *
   * @param {string} cdpreinq - id назначения
   * @returns {object} - сообщение
   * @memberof OrganizationsAPI
   */
  deleteCitilabAppointment(cdpreinq) {
    return this.getData('/citilab_int/del_pr_app', { cdpreinq });
  }

  /**
   * Ситилаб. Создание назначения по json
   *
   * @param {object} data - json с параметрами
   * {
   *  "cdpac"
   *  "cdsotr"
   *  "id_target"
   *  "id_biomat"
   *  "userfield": [
   *   {
   *     "id_userfield"
   *     "textvalue"
   *     "id_userdirectoryvalue"
   *   }
   *  ]
   * }
   * @returns {object} - сообщение
   * @memberof OrganizationsAPI
   */
  createCitilabAppointment(data) {
    return this.getData('/citilab_int/pr_app', data);
  }

  /**
   * Ситилаб. Обновление справочников Ситилаба
   *
   * @returns Promise с ответом от сервера
   */
  citilabForceLoadDB = () => this.getData('/citilab_int/force_load_db');
}

export default new OrganizationsAPI();
