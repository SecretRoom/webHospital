/* eslint-disable camelcase */
import MainAPI from '../main.api';

/**
 * Для для работы с графиком расписания
 *
 * @class DocGraphPriemAPI
 * @extends {MainAPI}
 */
class DocGraphPriemAPI extends MainAPI {
  /**
     * Создает график
     *
     * @cdfilial код филиала
     * @spis_sotr список сотрудников
     * @dat_priem1 дата начала
     * @dat_priem2 дата окончания
     * @time_from время начала рабочего дня
     * @time_to время окончания рабочего дня
     * @time_nadom время вызовов на дом
     * @memberof DocGraphPriemAPI
     */
  add(params) {
    const spis_sotr = params.spis_sotr;
    const dat_priem1 = params.dat_priem1;
    const dat_priem2 = params.dat_priem2;
    const time_from = params.time_from;
    const time_to = params.time_to;
    const time_nadom = params.time_nadom;
    return this.getData('/docgrafpriem/add', JSON.stringify({
      spis_sotr,
      dat_priem1,
      dat_priem2,
      time_from,
      time_to,
      time_nadom,
    }));
  }

  /** Возвращает график
     *
     */
  list =(params) => {
    const spis_sotr = params.spis_sotr;
    const dat_priem1 = params.dat_priem1;
    const dat_priem2 = params.dat_priem2;
    // const cdgraf = params.cdgraf;
    return this.getData('/docgrafpriem/list_inner', JSON.stringify({
      spis_sotr,
      dat_priem1,
      dat_priem2,
    }));
  }

  /**
     * Удаляет график
     */
  delete(params) {
    const spis_sotr = params.spis_sotr;
    const dat_priem1 = params.dat_priem1;
    const dat_priem2 = params.dat_priem2;
    return this.getData('/docgrafpriem/delete', JSON.stringify({
      spis_sotr,
      dat_priem1,
      dat_priem2,
    }));
  }

  update(params) {
    const cdgraf = params.cdgraf;
    const time_from = params.time_from;
    const time_to = params.time_to;
    const time_nadom = params.time_nadom;
    const dayoff = params.dayoff;
    const kolweb = params.kolweb;
    const kolterm = params.kolterm;
    const par = JSON.stringify({ cdgraf, time_from, time_to, time_nadom, dayoff, kolweb, kolterm });
    return this.getData('/docgrafpriem/update_ident', par);
  }
}

window.api = new DocGraphPriemAPI();

export default new DocGraphPriemAPI();
