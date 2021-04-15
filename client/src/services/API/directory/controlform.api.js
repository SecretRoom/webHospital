import MainAPI from '../main.api';

/**
 * API для страницы "Контроль параметров формы"
 *
 * @class ControlFormAPI
 * @extends {MainAPI}
 */
class ControlFormAPI extends MainAPI {
    addControlForm = (
      data,
    ) => {
      return this.getData(
        '/ctrlform/grant_add',
        data,
      )
    };

    updateControlForm = (
      data,
    ) => {
      return this.getData(
        '/ctrlform/controlform_update',
        data,
      )
    };

    deleteControlForm = (
      data,
    ) => {
      return this.getData(
        '/ctrlform/grant_delete',
        data,
      )
    };

    loadControlForms = (
      data = {},
    ) => {
      return this.getData(
        '/ctrlform/controlforms_list',
        data,
      )
    };
}
export default new ControlFormAPI();
