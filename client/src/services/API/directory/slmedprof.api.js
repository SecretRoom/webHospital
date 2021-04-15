import MainAPI from '../main.api';

/**
 * API для страницы "Справочник slmedprof"
 *
 * @class SlmedprofAPI
 * @extends {MainAPI}
 */
class SlmedprofAPI extends MainAPI {
    compact = (
      data = {},
    ) => {
      return this.getData(
        '/slmedprof/compact',
        data,
      )
    };

    load = (
      data,
    ) => {
      return this.getData(
        '/slmedprof/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slmedprof/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slmedprof/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slmedprof/delete',
        data,
      )
    };
}

export default new SlmedprofAPI();
