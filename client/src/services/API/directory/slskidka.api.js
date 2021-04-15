import MainAPI from '../main.api';

/**
 * API для страницы "Справочник Скидок"
 *
 * @class SlskidkaAPI
 * @extends {MainAPI}
 */
class SlskidkaAPI extends MainAPI {
    loadSlskidka = (
      data,
    ) => {
      return this.getData(
        '/slskidka/slskidka_list',
        data,
      )
    };

    addSlskidka = (
      data,
    ) => {
      return this.getData(
        '/slskidka/slskidka_add',
        data,
      )
    };

    updateSlskidka = (
      data,
    ) => {
      return this.getData(
        '/slskidka/slskidka_update',
        data,
      )
    };

    deleteSlskidka = (
      data,
    ) => {
      return this.getData(
        '/slskidka/slskidka_delete',
        data,
      )
    };
}
export default new SlskidkaAPI();
