import MainAPI from '../main.api';

/**
 * API для страницы "Справочник статусов приема"
 *
 * @class SlstatuspriemAPI
 * @extends {MainAPI}
 */
class SlstatuspriemAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slstatuspriem/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slstatuspriem/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slstatuspriem/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slstatuspriem/delete',
        data,
      )
    };
}

export default new SlstatuspriemAPI();
