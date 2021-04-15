import MainAPI from '../main.api';

/**
 * API для страницы "Типы документов"
 *
 * @class SldocumAPI
 * @extends {MainAPI}
 */
class SlsocgrAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slsocgr/load',
        data,
      )
    };

    loadDoctypeCompact = (
      data = {},
    ) => {
      return this.getData(
        '/slsocgr/typesoc_compact',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slsocgr/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slsocgr/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slsocgr/delete',
        data,
      )
    };
}

export default new SlsocgrAPI();
