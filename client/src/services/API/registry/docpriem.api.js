/* eslint-disable camelcase,no-unused-vars,no-undef */
import MainAPI from '../main.api';

class DocPriemAPI extends MainAPI {
  /**
   * Упрощенное отображение расписания - для проставления типов ячеек
   *
   * @cdsotr Спиоск сотрудников
   * @spis_sotr список сотрудников
   * @dat_priem дата "С"
   * @count сколько дней (по умолчанию 7)
   */
  list_service(params) {
    // const cdsotr = params.spis_sotr.join(',');
    // const dat_priem = params.dat_priem;

    const cdsotrs = [{ cdsotr: 'e6bae6a7-7ce7-4a7b-a1d7-edad769bdfdf' }, { cdsotr: 'd250e0e9-b1a1-4acb-ad54-d668f9122392' }];
    const dat_priem = '2020-09-07 00:00:00.000000';

    const count = params.count;
    if (count !== undefined) {
      return this.getData('/docpriem/list_service', JSON.stringify({
        cdsotrs,
        dat_priem,
        count,
      }));
    }
    return this.getData('/docpriem/list_service', JSON.stringify({
      cdsotr,
      dat_priem,
    }));
  }

/** Возвращает развернутый по дням график приёима
 *@cdsotr код сотрудника
 *@datefrom дата С. график берется на 31 день
  */
  list_open(params) {
    const cdsotr = params.cdsotr
    const datefrom = params.datefrom
    // return this.getData('/docpriem/list_open')
    return this.getData('/docpriem/list_open', JSON.stringify({
       datefrom,
       cdsotr,
      }))
  }

  /**
   * Обнолвение ячейки ( не запись)
   *
   * @cdpriem Код ячейки
   * @cdvidpriem Резерв
   * @prterminal Размещение ячейки в терминале (0 - нет,1 - да)
   * @prweb Размещение ячейки в интернете (0 - нет,1 - да)
   * @cdlimitpriem Код ограничение записи через интернет
   */
  update(params) {
    const cdpriem = params.cdpriem
    const cdvidpriem = params.cdvidpriem
    const prterminal = params.prterminal
    const prweb = params.prweb
    const cdlimitpriem = params.cdlimitpriem
    return this.getData('/docpriem/update', JSON.stringify({
      cdpriem,
      cdvidpriem,
      prterminal,
      prweb,
      cdlimitpriem,
    }));
  }

  proflist() {
    return this.getData('/docpriem/proflist')
  }

  add(params) {
    const cdgrafs = params.map(d => ({ cdgraf: d }));
    return this.getData('/docpriem/ins_by_cdgraf', JSON.stringify({ cdgrafs }));
  }
}

window.api = new DocPriemAPI();

export default new DocPriemAPI();
