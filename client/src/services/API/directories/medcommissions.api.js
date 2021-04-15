import MainAPI from '../main.api';

class MedCommissionsAPI extends MainAPI {
  // получение таблицы справочника целей проведения врачебных комиссий
  getMedCommissionPurposes(cdcmt) {
    return this.getData('/directory/get_commission_purp', { cdcmt })
  }

  // получение таблицы справочника типов врачебных комиссий
  getMedCommissionTypes() {
    return this.getData('/directory/get_type_commission')
  }

  // получение таблицы справочника целей проведения врачебных комиссий
  getMedCommissionPurposesPursuing(data) {
    return this.getData('/directory/get_commission_purp', data)
  }

  // добавление записи в таблицу справочника целей проведения врачебных комиссий
  addMedCommissionPurposes(data) {
    return this.getData('/directory/add_commission_purp', data)
  }

  // удаление записи из таблицы справочников целей проведения врачебных комиссий
  deleteMedCommissionPurposes(data) {
    return this.getData('/directory/del_commission_purp', data)
  }

  // редактирование записи таблицы справочников целей проведения врачебных комиссий
  editMedCommissionPurposes(data) {
    return this.getData('/directory/upd_commission_purp', data)
  }

  // получение таблицы справочника врачебных комиссий
  getMedCommission() {
    return this.getData('/directory/get_commission')
  }

  // добавление записи в таблицу справочника целей проведения врачебных комиссий
  addMedCommission(data) {
    return this.getData('/directory/add_commission', data)
  }

  // редактирование записи в таблице справочника врачебных комиссий
  editMedCommission(data) {
    return this.getData('/directory/upd_commission', data)
  }

  // удаление записи из таблицы справочника врачебных комиссий
  deleteMedCommission(data) {
    return this.getData('/directory/del_commission', data)
  }

  // получение таблицы сотрудников, участвующих в выбранной комиссии
  getMedCommissionSotrList(data) {
    return this.getData(`/directory/get_commission_sotr/${data}`)
  }

  // добавление записи в таблицу сотрудников, участвующих в выбранной комиссии
  addMedCommissionSotrList(data) {
    return this.getData('/directory/add_commission_sotr', data)
  }

  // удаление записи из таблицы сотрудников, участвующих в выбранной комиссии
  deleteMedCommissionSotr(data) {
    return this.getData('/directory/del_commission_sotr', data)
  }

  // получение списка результатов врачебных комиссий
  getResultMedCommission(data) {
    return this.getData('/directory/get_result_commission', data)
  }

  // добавление типа ВК
  addMedCommissionType(data) {
    return this.getData('/directory/add_type_commission', data)
  }

  // изменение типа ВК
  updateMedCommissionType(data) {
    return this.getData('/directory/upd_type_commission', data)
  }

  // удаление типа ВК
  deleteMedCommissionType(data) {
    return this.getData('/directory/del_type_commission', data)
  }

  // добавление результата ВК
  addMedCommissionResult(data) {
    return this.getData('/directory/add_commissionresult', data)
  }

  // изменение результата ВК
  updateMedCommissionResult(data) {
    return this.getData('/directory/upd_commissionresult', data)
  }

  // удаление результата ВК
  deleteMedCommissionResult(data) {
    return this.getData('/directory/del_commissionresult', data)
  }

  // получение списка приказов врачебных комиссий
  getMedCommissionOrders(data) {
    return this.getData('/commission/get_slcommissionprikaz', data)
  }

  // добавление приказа ВК
  addMedCommissionOrder(data) {
    return this.getData('/commission/add_slcommissionprikaz', data)
  }

  // изменение приказа ВК
  updateMedCommissionOrder(data) {
    return this.getData('/commission/upd_slcommissionprikaz', data)
  }

  // удаление приказа ВК
  deleteMedCommissionOrder(data) {
    return this.getData('/commission/del_slcommissionprikaz', data)
  }
}
export default new MedCommissionsAPI();
