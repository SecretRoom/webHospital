import MainAPI from '../main.api';

class ServicesTypesAPI extends MainAPI {
  getAllObsTypes() {
    return this.getData('/directory/dictionaries/get_all_obs_types/')
  }

  getObsType(data) {
    return this.getData('/directory/dictionaries/get_obs_type/', { cdobstype: data })
  }

  addObsType(data, token) {
    return this.getData('/directory/dictionaries/add_obs_type/', data, { cancelToken: token })
  }

  changeObsType(data, token) {
    return this.getData('/directory/dictionaries/change_obs_type/', data, { cancelToken: token })
  }

  // удаление записи из таблицы шаблонов документов для услуг
  deleteObsType(data) {
    return this.getData('/directory/dictionaries/del_obs_type/', data)
  }

  getServices(token) {
    return this.getData('/examination/uslug/2019-12-06', null, { cancelToken: token })
  }

  getParams(data) {
    return this.getData('/directory/getparams', { param_text: data })
  }

  addParam(data) {
    return this.getData('/directory/insertparam', data)
  }

  updateParam(data) {
    return this.getData('/directory/updateparam', data)
  }

  deleteParam(id) {
    return this.getData('/directory/deleteparam', { cdpar: id })
  }

  addSlotParams(cdobs, cdpar) {
    return this.getData('/directory/dictionaries/add_report_field/', { cdobstype: cdobs, cdpars: [cdpar] })
  }

  removeSlotParams(cdobs, cd) {
    return this.getData('/directory/dictionaries/del_report_field/', { cdobstype: cdobs, cdpar: cd })
  }

  updateSlotParams(data) {
    return this.getData('/directory/dictionaries/change_report_field/', data)
  }

  addReportProfile(type, id) {
    return this.getData('/directory/dictionaries/add_report_profile/', { cdobstype: type, cdprof: id })
  }

  removeReportProfile(type, id) {
    return this.getData('/directory/dictionaries/del_report_profile/', { cdobstype: type, cdprof: id })
  }

  fetchReportProfiles(data) {
    return this.getData('/directory/dictionaries/get_lpu_report_profiles/', { prof_text: data })
  }

  getTeethParams(cdobstype) {
    return this.getData('/directory/get_params_teeth', { cdobstype })
  }

  addTeethParams(data) {
    return this.getData('/directory/add_params_teeth', data)
  }

  updateTeethParams(data) {
    return this.getData('/directory/upd_params_teeth', data)
  }

  deleteTeethParams(data) {
    return this.getData('/directory/del_params_teeth', data)
  }
}
export default new ServicesTypesAPI();
