import MainAPI from '../main.api';

/**
 * API для страницы "Нозоформы"
 *
 * @class UsersAPI
 * @extends {MainAPI}
 */
class NozoformAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/nozoform/load',
        data,
      )
    };

    loadNozoformStr = (
      data,
    ) => {
      return this.getData(
        '/nozoform/load_nozoformstr',
        data,
      )
    };

    loadNozoformDet = (
      data,
    ) => {
      return this.getData(
        '/nozoform/load_nozoformdet',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/nozoform/add',
        data,
      )
    };

    addNozolstr = (
      data,
    ) => {
      return this.getData(
        '/nozoform/add_nozoformstr',
        data,
      )
    };

    addNozoldet = (
      data,
    ) => {
      return this.getData(
        '/nozoform/add_nozoformdet',
        data,
      )
    };

    deleteNozol = (
      data,
    ) => {
      return this.getData(
        '/nozoform/delete',
        data,
      )
    };

    deleteNozolstr = (
      data,
    ) => {
      return this.getData(
        '/nozoform/delete_nozoformstr',
        data,
      )
    };

    deleteNozoldet = (
      data,
    ) => {
      return this.getData(
        '/nozoform/delete_nozoformdet',
        data,
      )
    };

    updateNozol = (
      data,
    ) => {
      return this.getData(
        '/nozoform/update',
        data,
      )
    };

    updateNozolstr = (
      data,
    ) => {
      return this.getData(
        '/nozoform/update_nozolstr',
        data,
      )
    };

    updateNozoldet = (
      data,
    ) => {
      return this.getData(
        '/nozoform/update_nozoldet',
        data,
      )
    };
}
export default new NozoformAPI();
