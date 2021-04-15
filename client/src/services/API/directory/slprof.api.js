import MainAPI from '../main.api';

/**
 * API для страницы "Справочник slprof"
 *
 * @class SlprofAPI
 * @extends {MainAPI}
 */
class SlprofAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slprof/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slprof/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slprof/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slprof/delete',
        data,
      )
    };
}

export default new SlprofAPI();
