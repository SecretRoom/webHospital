import MainAPI from '../main.api';

/**
 * API для страницы "Справочник филиалов"
 *
 * @class SlfilialAPI
 * @extends {MainAPI}
 */
class SlfilialAPI extends MainAPI {
    compact = (
      data,
    ) => {
      return this.getData(
        '/slfilial/compact',
        data,
      )
    };

    load = (
      data,
    ) => {
      return this.getData(
        '/slfilial/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slfilial/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slfilial/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slfilial/delete',
        data,
      )
    };
}

export default new SlfilialAPI();
