import MainAPI from '../main.api';

/**
 * API для страницы "Справочник причин платных улуг"
 *
 * @class SlprichplAPI
 * @extends {MainAPI}
 */
class SlprichplAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slprichpl/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slprichpl/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slprichpl/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slprichpl/delete',
        data,
      )
    };
}

export default new SlprichplAPI();
