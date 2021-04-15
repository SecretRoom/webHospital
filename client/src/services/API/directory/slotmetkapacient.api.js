import MainAPI from '../main.api';

/**
 * API для страницы "Метки пациентов"
 *
 * @class SlotmetkaPacientAPI
 * @extends {MainAPI}
 */
class SlotmetkaPacientAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/slotmetka_pacient/list',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/slotmetka_pacient/add',
        data,
      )
    };

    update = (
      data,
    ) => {
      return this.getData(
        '/slotmetka_pacient/update',
        data,
      )
    };

    delete = (
      data,
    ) => {
      return this.getData(
        '/slotmetka_pacient/delete',
        data,
      )
    };

    loadOtmetkaCompact = () => Promise.resolve(
      [
        {
          prblack: 0,
          nmblack: '',
        },
        {
          prblack: 1,
          nmblack: 'Чёрная метка',
        },
        {
          prblack: 2,
          nmblack: 'VIP пациент',
        },
      ]);
}

export default new SlotmetkaPacientAPI();
