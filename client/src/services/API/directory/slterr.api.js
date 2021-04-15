import MainAPI from '../main.api';

/**
 * API для страницы "Справочник территорий страхования"
 *
 * @class SlterrAPI
 * @extends {MainAPI}
 */
class SlterrAPI extends MainAPI {
    compact = (
    ) => {
      return this.getData(
        '/slterr/compact',
        [],
      )
    };

    load = (
      data,
    ) => {
      return this.getData(
        '/slterr/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slterr/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slterr/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slterr/delete',
        data,
      )
    };
}

export default new SlterrAPI();
