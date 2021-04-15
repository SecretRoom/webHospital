import MainAPI from '../main.api';

/**
 * API для страницы "Справочник видов оплаты"
 *
 * @class SlvopllAPI
 * @extends {MainAPI}
 */
class SlvoplAPI extends MainAPI {
    compact = (
      data = {},
    ) => {
      return this.getData(
        '/slvopl/compact',
        data,
      )
    };

    load = (
      data,
    ) => {
      return this.getData(
        '/slvopl/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slvopl/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slvopl/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slvopl/delete',
        data,
      )
    };
}

export default new SlvoplAPI();
