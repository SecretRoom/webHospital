import MainAPI from '../main.api';

/**
 * API для страницы "Справочник slvidpom"
 *
 * @class SlvidpomAPI
 * @extends {MainAPI}
 */
class SlvidpomAPI extends MainAPI {
    compact = (
      data = {},
    ) => {
      return this.getData(
        '/slvidpom/compact',
        data,
      )
    };

    load = (
      data,
    ) => {
      return this.getData(
        '/slvidpom/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slvidpom/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slvidpom/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slvidpom/delete',
        data,
      )
    };
}

export default new SlvidpomAPI();
