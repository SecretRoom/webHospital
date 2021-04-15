import MainAPI from '../main.api';

/**
 * API для страницы "Организации, выдающие документы"
 *
 * @class SldocumKemAPI
 * @extends {MainAPI}
 */
class SldocumKemAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/sldocum_kem/list',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/sldocum_kem/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/sldocum_kem/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/sldocum_kem/delete',
        data,
      )
    };
}

export default new SldocumKemAPI();
