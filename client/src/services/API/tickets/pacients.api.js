import MainAPI from '../main.api';

/**
 * API для страницы "Пациенты"
 *
 * @class TicketsAPI
 * @extends {MainAPI}
 */
class PacientsAPI extends MainAPI {
    addPacient = (
      data,
    ) => {
      return this.getData(
        '/ticket/pacient_add',
        data,
      )
    };

    updatePacient = (
      data,
    ) => {
      return this.getData(
        '/ticket/pacient_update',
        data,
      )
    };

    deletePacient = (
      data,
    ) => {
      return this.getData(
        '/ticket/pacient_delete',
        data,
      )
    };

    onePacient = (
      data = {},
      data2 = {},
    ) => {
      return this.getData(
        `/ticket/pacient_one/${data.cdpac}/${data.cdstr}`,
        data2,
      )
    };

    slpredCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slpred_compact',
        data,
      )
    };

    slcompanyCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slcompany_compact',
        data,
      )
    };

    slcountryCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slcountry_compact',
        data,
      )
    };

    sldocumpasportCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sldocum_pasport_compact',
        data,
      )
    };

    slterrCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slterr_compact',
        data,
      )
    };

    slprichotkrCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slprichotkr_compact',
        data,
      )
    };

    polpaCompact = () => Promise.resolve(
      [
        {
          polpa: 'М',
          nmpolpa: 'Мужской',
        },
        {
          polpa: 'Ж',
          nmpolpa: 'Женский',
        },
      ]);

    prrabCompact = () => Promise.resolve(
      [
        {
          prrab: 0,
          nmprrab: 'Нет',
        },
        {
          prrab: 1,
          nmprrab: 'Да',
        },
      ]);

    pruchCompact = () => Promise.resolve(
      [
        {
          pruch: 1,
          nmpruch: 'Не прикреплен',
        },
        {
          pruch: 0,
          nmpruch: 'Прикреплен',
        },
      ]);

    perviCompact = () => Promise.resolve(
      [
        {
          pervi: 1,
          nmpervi: 'Да',
        },
        {
          pervi: 0,
          nmpervi: 'Нет',
        },
      ]);

    onlyfirstzabCompact = () => Promise.resolve(
      [
        {
          onlyfirstzab: 1,
          nmonlyfirstzab: 'Впервые',
        },
        {
          onlyfirstzab: 0,
          nmonlyfirstzab: 'Все',
        },
      ]);
    /**
    sllpuCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/lpu_compact',
        data,
      )
    };
    */

    reestrmoCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/reestrmo_compact',
        data,
      )
    };

    sluchaCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slucha_compact',
        data,
      )
    };

    slstrahCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slstrah_compact',
        data,
      )
    };

    slstrahFull = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slstrah_full',
        data,
      )
    };

    sltypepoliCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sltypepoli_compact',
        data,
      )
    };

    sldocumkemCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sldocumkem_compact',
        data,
      )
    };

    sldocumlgotCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sldocum_lgot_compact',
        data,
      )
    };

    slsocgrsotsgrCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slsocgr_sotsgr_compact',
        data,
      )
    };

    slsocgrsotsstCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slsocgr_sotsst_compact',
        data,
      )
    };

    slsocgrinvalidCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slsocgr_invalid_compact',
        data,
      )
    };

    checkFoms = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/check_foms',
        data,
      )
    };

    docnaprGet = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/docnapr_get',
        data,
      )
    };

    selectPacient = (
      data,
    ) => {
      return this.getData(
        '/ticket/pacient_select',
        data,
      )
    };

    kladrAddresCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/kladr_addres',
        data,
      )
    };

    kladrRegionCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/kladr_region_compact',
        data,
      )
    };

    kladrRaionCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/kladr_raion_compact',
        data,
      )
    };

    kladrGorodCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/kladr_gorod_compact',
        data,
      )
    };

    kladrPunktCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/kladr_punkt_compact',
        data,
      )
    };

    kladrStreetCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/kladr_street_compact',
        data,
      )
    };

    addGarant = (
      data,
    ) => {
      return this.getData(
        '/ticket/add_poli',
        data,
      )
    };

    updateGarant = (
      data,
    ) => {
      return this.getData(
        '/ticket/edit_poli',
        data,
      )
    };

    deleteGarant = (
      data,
    ) => {
      return this.getData(
        '/ticket/delete_poli',
        data,
      )
    };

    listGarants = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/list_poli',
        data,
      )
    };

    listOtdelProf = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slotdel_prof_compact',
        data,
      )
    };

    pacExists = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacient_exists',
        data,
      )
    };
}
export default new PacientsAPI();
