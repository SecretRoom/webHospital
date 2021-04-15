import MainAPI from './main.api';

class PatientListDataAPI extends MainAPI {
  getSotrList () {
    return this.getData('/directory/get_sotrlist/0');
  }
}

export default new PatientListDataAPI();
