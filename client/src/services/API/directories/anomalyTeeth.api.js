import MainAPI from '../main.api';

class AnomalyTeethAPI extends MainAPI {
  // получение справочника аномалии количества зубов
  getAnomalyTeethQuantityData() {
    return this.getData('/directory/get_slteethquantity')
  }

  // добавление аномалии количества зубов
  addAnomalyTeethQuantity(data) {
    return this.getData('/directory/add_slteethquantity', data)
  }

  // изменение аномалии количества зубов
  updateAnomalyTeethQuantity(data) {
    return this.getData('/directory/upd_slteethquantity', data)
  }

  // удаление аномалии количества зубов
  deleteAnomalyTeethQuantity(data) {
    return this.getData('/directory/del_slteethquantity', data)
  }

  // получение справочника аномалии положения зубов
  getAnomalyTeethPositionData() {
    return this.getData('/directory/get_slteethposition')
  }

  // добавление аномалии положения зубов
  addAnomalyTeethPosition(data) {
    return this.getData('/directory/add_slteethposition', data)
  }

  // изменение аномалии положения зубов
  updateAnomalyTeethPosition(data) {
    return this.getData('/directory/upd_slteethposition', data)
  }

  // удаление аномалии положения зубов
  deleteAnomalyTeethPosition(data) {
    return this.getData('/directory/del_slteethposition', data)
  }

  // получение справочника аномалии сроков прорезывания зубов
  getAnomalyTeethingPeriodData() {
    return this.getData('/directory/get_slteethingperiod')
  }

  // добавление аномалии сроков прорезывания зубов
  addAnomalyTeethingPeriod(data) {
    return this.getData('/directory/add_slteethingperiod', data)
  }

  // изменение аномалии сроков прорезывания зубов
  updateAnomalyTeethingPeriod(data) {
    return this.getData('/directory/upd_slteethingperiod', data)
  }

  // удаление аномалии сроков прорезывания зубов
  deleteAnomalyTeethingPeriod(data) {
    return this.getData('/directory/del_slteethingperiod', data)
  }
}
export default new AnomalyTeethAPI();
