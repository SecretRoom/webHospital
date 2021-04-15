import MainAPI from '../main.api';

/**
 * API для страницы "Причины открепления"
 *
 * @class SluchalAPI
 * @extends {MainAPI}
 */
class SlprichotkrAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slprichotkr/list',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slprichotkr/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slprichotkr/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slprichotkr/delete',
        data,
      )
    };
}

export default new SlprichotkrAPI();
