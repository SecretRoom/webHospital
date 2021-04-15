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
        '/slsotrdayoff/load',
        data,
      )
    };

    types = (
      data,
    ) => {
      return this.getData(
        '/slsotrdayoff/types',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slsotrdayoff/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slsotrdayoff/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slsotrdayoff/delete',
        data,
      )
    };
}

export default new SlprofAPI();
