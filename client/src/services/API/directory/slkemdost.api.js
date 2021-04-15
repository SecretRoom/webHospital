import MainAPI from '../main.api';

/**
 * API для страницы "Справочник slkemdost"
 *
 * @class SlkemdostAPI
 * @extends {MainAPI}
 */
class SlkemdostAPI extends MainAPI {
/*    compact = (
      data = {},
    ) => {
      return this.getData(
        '/slkemdost/compact',
        data,
      )
    };
см ticket
*/
    load = (
      data,
    ) => {
      return this.getData(
        '/slkemdost/load',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slkemdost/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slkemdost/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slkemdost/delete',
        data,
      )
    };
}

export default new SlkemdostAPI();
