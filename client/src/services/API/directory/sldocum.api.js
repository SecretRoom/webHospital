import MainAPI from '../main.api';

/**
 * API для страницы "Типы документов"
 *
 * @class SldocumAPI
 * @extends {MainAPI}
 */
class SldocumAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/sldocum/load',
        data,
      )
    };

    loadDoctypeCompact = (
      data = {},
    ) => {
      return this.getData(
        '/sldocum/typedoc_compact',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/sldocum/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/sldocum/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/sldocum/delete',
        data,
      )
    };
}

export default new SldocumAPI();
