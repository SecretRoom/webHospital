import MainAPI from '../main.api';

/**
 * API для страницы "Справочник должностей"
 *
 * @class SluchalAPI
 * @extends {MainAPI}
 */
class SlcountryAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slcountry/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slcountry/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slcountry/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slcountry/delete',
        data,
      )
    };
}

export default new SlcountryAPI();
