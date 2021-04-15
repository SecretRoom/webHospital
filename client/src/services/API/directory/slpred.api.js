import MainAPI from '../main.api';

/**
 * API для страницы "Типы документов"
 *
 * @class SlpredAPI
 * @extends {MainAPI}
 */
class SlpredAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slpred/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slpred/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slpred/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slpred/delete',
        data,
      )
    };
}

export default new SlpredAPI();
