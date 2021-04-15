import MainAPI from '../main.api';

/**
 * API для страницы "Справочник должностей"
 *
 * @class SluchalAPI
 * @extends {MainAPI}
 */
class SldolgAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/sldolg/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/sldolg/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/sldolg/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/sldolg/delete',
        data,
      )
    };
}

export default new SldolgAPI();
