import MainAPI from '../main.api';

/**
 * API для страницы "Справочник статусов приема"
 *
 * @class SlvidpriemAPI
 * @extends {MainAPI}
 */
class SlvidpriemAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slvidpriem/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slvidpriem/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slvidpriem/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slvidpriem/delete',
        data,
      )
    };
}

export default new SlvidpriemAPI();
