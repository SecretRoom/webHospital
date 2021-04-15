import MainAPI from '../main.api';

/**
 * API для страницы "Контроль параметров формы"
 *
 * @class UslugGroupAPI
 * @extends {MainAPI}
 */
class UslugGroupAPI extends MainAPI {
    addUslugGroup = (
      data,
    ) => {
      return this.getData(
        '/usluggroup/add_group',
        data,
      )
    };

    updateUslugGroup = (
      data,
    ) => {
      return this.getData(
        '/usluggroup/update_group',
        data,
      )
    };

    deleteUslugGroup = (
      data,
    ) => {
      return this.getData(
        '/usluggroup/delete_group',
        data,
      )
    };

    loadUslugGroup = (
      data = {},
    ) => {
      return this.getData(
        '/usluggroup/list_groups',
        data,
      )
    };

    loadUslugParent = (
      data = {},
    ) => {
      return this.getData(
        '/usluggroup/list_parents',
        data,
      )
    };

    standartCompact = () => Promise.resolve(
      [
        {
          standart: 1,
          nmstandart: 'талоны',
        },
        {
          standart: 2,
          nmstandart: 'стационар',
        },
        {
          standart: 13,
          nmstandart: 'ЭМК',
        },
        {
          standart: 100,
          nmstandart: 'платные услуги',
        },
      ]);

    slobsuslugCompact= (
      data = {},
    ) => {
      return this.getData(
        '/usluggroup/slobsuslug_compact',
        data,
      )
    };

    addUslugChild = (
      data,
    ) => {
      return this.getData(
        '/usluggroup/add_child',
        data,
      )
    };

    updateUslugChild = (
      data,
    ) => {
      return this.getData(
        '/usluggroup/update_child',
        data,
      )
    };

    deleteUslugChild = (
      data,
    ) => {
      return this.getData(
        '/usluggroup/delete_child',
        data,
      )
    };
}
export default new UslugGroupAPI();
