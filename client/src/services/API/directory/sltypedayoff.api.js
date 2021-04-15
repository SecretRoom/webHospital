import MainAPI from '../main.api';

/**
 * API для страницы "Справочник участков"
 *
 * @class SltypedayoffAPI
 * @extends {MainAPI}
 */
class SltypedayoffAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/sltypedayoff/load',
        data,
      )
    };

/* только просмотр
    add = (
      data,
    ) => {
      return this.getData(
        '/sltypedayoff/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/sltypedayoff/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/sltypedayoff/delete',
        data,
      )
    };
*/
}

export default new SltypedayoffAPI();
