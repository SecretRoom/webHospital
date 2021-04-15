import MainAPI from '../main.api';

/**
 * API для страницы "Справочник slmedspec"
 *
 * @class SlmedspecAPI
 * @extends {MainAPI}
 */
class SlmedspecAPI extends MainAPI {
    compact = (
      data = {},
    ) => {
      return this.getData(
        '/slmedspec/compact',
        data,
      )
    };

    load = (
      data,
    ) => {
      return this.getData(
        '/slmedspec/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slmedspec/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slmedspec/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slmedspec/delete',
        data,
      )
    };
}

export default new SlmedspecAPI();
