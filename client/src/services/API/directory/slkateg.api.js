import MainAPI from '../main.api';

/**
 * API для страницы "Категории"
 *
 * @class SlkategAPI
 * @extends {MainAPI}
 */
class SlkategAPI extends MainAPI {
    loadSlKateg = (
      data,
    ) => {
      return this.getData(
        '/slkateg/slkateg_select',
        data,
      )
    };

    addSlKateg = (
      data,
    ) => {
      return this.getData(
        '/slkateg/slkateg_insert',
        data,
      )
    };

    updateSlKateg = (
      data,
    ) => {
      return this.getData(
        '/slkateg/slkateg_update',
        data,
      )
    };

    deleteSlKateg = (
      data,
    ) => {
      return this.getData(
        '/slkateg/slkateg_delete',
        data,
      )
    };
}
export default new SlkategAPI();
