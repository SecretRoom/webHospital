import MainAPI from '../main.api';

/**
 * API для страницы "Справочник участков"
 *
 * @class SlstrahAPI
 * @extends {MainAPI}
 */
class SlstrahAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slstrah/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slstrah/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slstrah/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slstrah/delete',
        data,
      )
    };
}

export default new SlstrahAPI();
