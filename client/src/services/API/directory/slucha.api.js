import MainAPI from '../main.api';

/**
 * API для страницы "Справочник участков"
 *
 * @class SluchalAPI
 * @extends {MainAPI}
 */
class SluchaAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slucha/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slucha/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slucha/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slucha/delete',
        data,
      )
    };
}

export default new SluchaAPI();
