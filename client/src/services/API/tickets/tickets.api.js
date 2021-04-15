import React from 'react';
import MainAPI from '../main.api';

/**
 * API для страницы "Талоны"
 *
 * @class TicketsAPI
 * @extends {MainAPI}
 */
class TicketsAPI extends MainAPI {
    loadTickets= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/tickets_list',
        data,
      )
    };

    loadTicketsPriemnik= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticketspriemnik_list',
        data,
      )
    };

    loadTicketsHospital= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticketshospital_list',
        data,
      )
    };

    loadDiagns= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/docdiagn_list',
        data,
      )
    };

    loadStationarDiagns= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/docdiagn_stationar_list',
        data,
      )
    };

    loadPos= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/docpos_list',
        data,
      )
    };

    loadUslugs= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/docuslug_list',
        data,
      )
    };

    loadXmlrir= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/xmlrir_list',
        data,
      )
    };

    pacientOvd= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacient_ovd',
        data,
      )
    };

    pacientOvdUpdate= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacient_ovd_update',
        data,
      )
    };

    copyTicket = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticket_copy',
        data,
      )
    };

    addTicket = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticket_add',
        data,
      )
    };

    addStationarTicket = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticket_stationar_add',
        data,
      )
    };

    addPriemnikTicket = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticketpriemnik_add',
        data,
      )
    };

    updateTicket = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticket_update',
        data,
      )
    };

    updatePriemnik = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/priemnik_update',
        data,
      )
    };

    deleteStationar = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/stationar_delete',
        data,
      )
    };

    listStationar = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticket_hospital_list',
        data,
      )
    };

    hasStationar = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/has_stationar',
        data,
      )
    };

    hasIsDoneStationar = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/has_isdone_stationar',
        data,
      )
    };

    findPacient = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacient_by_kodse',
        data,
      )
    };

    findTicket = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticket_find',
        data,
      )
    };

    deleteTicket = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/ticket_delete',
        data,
      )
    };

    oneTicket = (
      data = {},
    ) => {
      return this.getData(
        `/ticket/ticket_one/${data.cddoc}`,
        {},
      )
    };

    oneNaprav = (
      data = {},
    ) => {
      return this.getData(
        `/ticket/naprav_one/${data.cddoc}`,
        {},
      )
    };

    oneTicketHospital = (
      data = {},
    ) => {
      return this.getData(
        `/ticket/ticket_hospital_one/${data.cddoc}`,
        {},
      )
    };

    oneTicketCardHospital = (
      data = {},
    ) => {
      return this.getData(
        `/ticket/ticket_hospital_card_one/${data.cddoc}`,
        {},
      )
    };

    oneTicketPriemnik = (
      data = {},
    ) => {
      return this.getData(
        `/ticket/ticket_priemnik_one/${data.cddoc}`,
        {},
      )
    };

    getPersonalData (currentPatient) {
      return this.getData(`/patient/json/${currentPatient}/`);
    }

    slprichCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slprich_compact',
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

    slstrahCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slstrah_compact',
        data,
      )
    };

    slsotrCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slsotr_compact',
        data,
      )
    };

    slprofCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slprof_compact',
        data,
      )
    };

    pacientCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacient_compact',
        data,
      )
    };

    disucCompact = () => Promise.resolve(
      [
        {
          disuc: 0,
          nmdisuc: '',
        },
        {
          disuc: 1,
          nmdisuc: 'Взят',
        },
        {
          disuc: 2,
          nmdisuc: 'Состоит',
        },
        {
          disuc: 3,
          nmdisuc: 'Снят',
        },
      ]);

    sldrunkCompact = () => Promise.resolve(
      [
        {
          cddrunk: 0,
          nmdrunk: '',
        },
        {
          cddrunk: 1,
          nmdrunk: 'тяжелое',
        },
        {
          cddrunk: 2,
          nmdrunk: 'средней тяжести',
        },
        {
          cddrunk: 3,
          nmdrunk: 'нормальное',
        },
        {
          cddrunk: 4,
          nmdrunk: 'Алкогольного',
        },
        {
          cddrunk: 5,
          nmdrunk: 'Наркотического',
        },
      ]);

    sldefecCompact = () => Promise.resolve(
      [
        {
          cddefec: 0,
          nmdefec: '',
        },
        {
          cddefec: 1,
          nmdefec: 'несвоевременность госпитализации',
        },
        {
          cddefec: 2,
          nmdefec: 'недостаточный объем клинико-диагностического обследования',
        },
        {
          cddefec: 3,
          nmdefec: 'неправильная тактика лечения',
        },
        {
          cddefec: 4,
          nmdefec: 'несовпадение диагноза',
        },
      ]);

    userCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sluser_compact',
        data,
      )
    };

    slotdelProfCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slotdel_prof_compact',
        data,
      )
    };

    slotdelProfList = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/list_otdpro',
        data,
      )
    };

    slotdelProfPriznCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slotdelprof_prizn_compact',
        data,
      )
    };

    slkemdostCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slkemdost_compact',
        data,
      )
    };

    slchasdostCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slchasdost_compact',
        data,
      )
    };

    lpuPerevodCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/lpu_perevod_compact',
        data,
      )
    };

    vozvratCompact = () => Promise.resolve(
      [
        {
          vozvrat: 0,
          nmvozvrat: '',
        },
        {
          vozvrat: 1,
          nmvozvrat: 'снят.СМО',
        },
        {
          vozvrat: 2,
          nmvozvrat: 'восст.',
        },
        {
          vozvrat: 3,
          nmvozvrat: 'снят.ТФОМС',
        },
        {
          vozvrat: 4,
          nmvozvrat: 'резерв',
        },
      ]);

    gospitCompact = () => Promise.resolve(
      [
        {
          cdpom: 0,
          nmpom: 'Плановая',
        },
        {
          cdpom: 1,
          nmpom: 'Экстренная',
        },
        {
          cdpom: 2,
          nmpom: 'Неотложная',
        },
      ]);

    expzaklCompact = () => Promise.resolve(
      [
        {
          expzakl: 0,
          nmexpzakl: '',
        },
        {
          expzakl: 1,
          nmexpzakl: 'январь',
        },
        {
          expzakl: 2,
          nmexpzakl: 'февраль',
        },
        {
          expzakl: 3,
          nmexpzakl: 'март',
        },
        {
          expzakl: 4,
          nmexpzakl: 'апрель',
        },
        {
          expzakl: 5,
          nmexpzakl: 'май',
        },
        {
          expzakl: 6,
          nmexpzakl: 'июнь',
        },
        {
          expzakl: 7,
          nmexpzakl: 'июль',
        },
        {
          expzakl: 8,
          nmexpzakl: 'август',
        },
        {
          expzakl: 9,
          nmexpzakl: 'сентябрь',
        },
        {
          expzakl: 10,
          nmexpzakl: 'октябрь',
        },
        {
          expzakl: 11,
          nmexpzakl: 'ноябрь',
        },
        {
          expzakl: 12,
          nmexpzakl: 'декабрь',
        },
      ]);

    isdoneCompact = () => Promise.resolve(
      [
        {
          isdone: 0,
          nmisdone: '',
        },
        {
          isdone: 1,
          nmisdone: 'нет',
        },
        {
          isdone: 2,
          nmisdone: 'да',
        },
      ]);

    slotdelCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slotdel_compact',
        data,
      )
    };

    slotdelByPriznCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slotdel_prizn_compact',
        data,
      )
    };

    slprdnsCompact = () => Promise.resolve(
      [
        {
          prdns: 0,
          nmprdns: '',
        },
        {
          prdns: 1,
          nmprdns: 'круглосуточный',
        },
        {
          prdns: 2,
          nmprdns: 'дневной',
        },
      ]);

    slpomCompact = () => Promise.resolve(
      [
        {
          cdpom: 0,
          nmpom: '',
        },
        {
          cdpom: 1,
          nmpom: 'плановая',
        },
        {
          cdpom: 2,
          nmpom: 'экстренная',
        },
        {
          cdpom: 3,
          nmpom: 'неотложная',
        },
      ]);

    slallpacCompact = () => Promise.resolve(
      [
        {
          allpac: 0,
          nmallpac: '',
        },
        {
          allpac: 1,
          nmallpac: 'выбыл',
        },
        {
          allpac: 2,
          nmallpac: 'не выбыл',
        },
      ]);

    controldataCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/controldata_compact',
        data,
      )
    };

    slprichvozvrCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slprichvozvr_compact',
        data,
      )
    };

    controldatacdzagolCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/controldata_cdzagol_compact',
        data,
      )
    };

    slvinavozvrCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slvinavozvr_compact',
        data,
      )
    };

    sldanetCompact = () => Promise.resolve(
      [
        {
          danet: 0,
          nmdanet: '',
        },
        {
          danet: 1,
          nmdanet: 'да',
        },
        {
          danet: 2,
          nmdanet: 'нет',
        },
      ]);

    slvoplCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slvopl_compact',
        data,
      )
    };

    slksgaaCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slksgaa_compact',
        data,
      )
    };

    slkategCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slkateg_compact',
        data,
      )
    };

    slvmpmetodCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slvmpmetod_compact',
        data,
      )
    };

    slvmpmetodHgruCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slvmpmetod_hgr_u_compact',
        data,
      )
    };

    reestrschmoneyCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/reestrschmoney_compact',
        data,
      )
    };

    vdiaCompact = () => Promise.resolve(
      [
        {
          cdvdia: 1,
          nmvdia: 'острое',
        },
        {
          cdvdia: 2,
          nmvdia: 'впервые зарегистриров. хроническое',
        },
        {
          cdvdia: 3,
          nmvdia: 'известное ранее хрон.(впервые в данном году)',
        },
        {
          cdvdia: 4,
          nmvdia: 'обострение хрон.(повторно в тек.году)',
        },
        {
          cdvdia: 5,
          nmvdia: 'отравление',
        },
        {
          cdvdia: 6,
          nmvdia: 'травма',
        },
        {
          cdvdia: 7,
          nmvdia: 'здоров',
        },
        {
          cdvdia: 8,
          nmvdia: 'неуточненный',
        },
        {
          cdvdia: 9,
          nmvdia: 'не учитывать в заболев.',
        },
      ]);

    vdiaOnkoCompact = () => Promise.resolve(
      [
        {
          cdvdia: 1,
          nmvdia: 'острое',
        },
        {
          cdvdia: 2,
          nmvdia: 'впервые зарегистриров. хроническое',
        },
        {
          cdvdia: 3,
          nmvdia: 'известное ранее хрон.(впервые в данном году)',
        },
        {
          cdvdia: 4,
          nmvdia: 'обострение хрон.(повторно в тек.году)',
        },
      ]);

    ktonkpacCompact = () => Promise.resolve(
      [
        {
          ktonkpac: 0,
          nmktonkpac: '',
        },
        {
          ktonkpac: 1,
          nmktonkpac: 'первичное лечение (лечение пациента за исключением прогрессирования и рецидива)',
        },
        {
          ktonkpac: 2,
          nmktonkpac: 'лечение при рецидиве',
        },
        {
          ktonkpac: 3,
          nmktonkpac: 'лечение при прогрессировании',
        },
        {
          ktonkpac: 4,
          nmktonkpac: 'динамическое наблюдение',
        },
        {
          ktonkpac: 5,
          nmktonkpac: 'диспансерное наблюдение (здоров/ремиссия)',
        },
        {
          ktonkpac: 6,
          nmktonkpac: 'диагностика (при отсутсвии специфического лечения)',
        },
        {
          ktonkpac: 7,
          nmktonkpac: 'симптоматическое лечение',
        },
      ]);

    consilCompact = () => Promise.resolve(
      [
        {
          consil: 0,
          nmconsil: 'отсутствует необходимость проведения консилиума',
        },
        {
          consil: 1,
          nmconsil: 'определение тактики обследования',
        },
        {
          consil: 2,
          nmconsil: 'определение тактики лечения',
        },
        {
          consil: 3,
          nmconsil: 'изменение тактики лечения',
        },
        {
          consil: 4,
          nmconsil: 'консилиум не проведен при наличии необходимости его проведения',
        },
      ]);

    prnallnozCompact = () => Promise.resolve(
      [
        {
          prnallnoz: 0,
          nmprnallnoz: 'печати всей нозологии',
        },
        {
          prnallnoz: 1,
          nmprnallnoz: 'только с данными',
        },
      ]);

    incpolstacCompact = () => Promise.resolve(
      [
        {
          inc_zadach: 1,
          nminc_zadach: 'поликлиника',
        },
        {
          inc_zadach: 2,
          nminc_zadach: 'стационар',
        },
        {
          inc_zadach: 14,
          nminc_zadach: 'диспансеризация',
        },
      ]);

    prchnaprCompact = () => Promise.resolve(
      [
        {
          cdprchnapr: -1,
          nmprchnapr: 'не указана',
        },
        {
          cdprchnapr: 0,
          nmprchnapr: 'Госпитализация',
        },
        {
          cdprchnapr: 1,
          nmprchnapr: 'Консультация',
        },
        {
          cdprchnapr: 2,
          nmprchnapr: 'Обследование',
        },
        {
          cdprchnapr: 3,
          nmprchnapr: 'Восстановительное лечение',
        },
        {
          cdprchnapr: 4,
          nmprchnapr: 'Уточнение диагноза',
        },
        {
          cdprchnapr: 5,
          nmprchnapr: 'Назначение лечения',
        },
      ]);

    dusnatCompact = () => Promise.resolve(
      [
        {
          du_snat: 0,
          nmdu_snat: '',
        },
        {
          du_snat: 1,
          nmdu_snat: 'выздоровление',
        },
        {
          du_snat: 2,
          nmdu_snat: 'переезд',
        },
        {
          du_snat: 3,
          nmdu_snat: 'перевод',
        },
        {
          du_snat: 4,
          nmdu_snat: 'смерть',
        },
        {
          du_snat: 5,
          nmdu_snat: 'прочее',
        },
      ]);

    sldiagnCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sldiagn_compact',
        data,
      )
    };

    sldocumCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sldocum_compact',
        data,
      )
    };

    slishodsluchCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slishodsluch_compact',
        data,
      )
    };

    slresultsluchCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slresultsluch_compact',
        data,
      )
    };

    strvoplDict= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/strvopl_dict',
        data,
      )
    };

    resultIshodCompact= (
      // eslint-disable-next-line no-unused-vars
      data = {},
    ) => {
      return this.getData(
        '/ticket/result_ishod_compact',
        data,
      )
    };

    slobsuslugStandartCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slobsuslug_compact_standart',
        data,
      )
    };

    ProsnCompact = () => Promise.resolve(
      [
        {
          prosn: -1,
          nmprosn: 'При поступлении',
        },
        {
          prosn: 0,
          nmprosn: 'Основной',
        },
        {
          prosn: 1,
          nmprosn: 'Cопутствующий',
        },
        {
          prosn: 2,
          nmprosn: 'Осложняющий',
        },
      ]);

    ProsnAllCompact = () => Promise.resolve(
      [
        {
          prosn: -1,
          nmprosn: 'При поступлении',
        },
        {
          prosn: 0,
          nmprosn: 'Основной',
        },
        {
          prosn: 1,
          nmprosn: 'Cопутствующий',
        },
        {
          prosn: 2,
          nmprosn: 'Осложняющий',
        },
        {
          prosn: 3,
          nmprosn: 'Паталого-анатомический',
        },
        {
          prosn: 4,
          nmprosn: 'Основная причина смерти',
        },
        {
          prosn: 5,
          nmprosn: 'Диагнозы, осложнившие роды',
        },
      ]);

    perviStationarCompact = () => Promise.resolve(
      [
        {
          pervi: -1,
          nmpervi: '',
        },
        {
          pervi: 4,
          nmpervi: 'Перевод внутри МО с другого профиля (не являющийся следствием прогрессирования или осложнения основного заболевания)',
        },
        {
          pervi: 5,
          nmpervi: 'Перевод внутри МО с другого профиля (являющийся следствием прогрессирования или осложнения основного заболевания)',
        },
      ]);

    ProsnTicketCompact = () => Promise.resolve(
      [
        {
          prosn: 1,
          nmprosn: 'Cопутствующий',
        },
        {
          prosn: 2,
          nmprosn: 'Осложняющий',
        },
      ]);

    slmestposCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slmestpos_compact',
        data,
      )
    };

    slobsuslugCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slobsuslug_compact',
        data,
      )
    };

    sllpuCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sllpu_compact',
        data,
      )
    };

    sllpuCompact1= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sllpu_compact1',
        data,
      )
    };

    sllpuInnOgrnCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sllpu_inn_ogrn_compact',
        data,
      )
    };

    slsotrnaprfromCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slsotrnaprfrom_compact',
        data,
      )
    };

    listFreeKoikCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/list_free_koik_compact',
        data,
      )
    };

    PrchotkCompact = () => Promise.resolve(
      [
        {
          cdprchotk: 0,
          nmprchotk: '',
        },
        {
          cdprchotk: 1,
          nmprchotk: 'документированный отказ больного',
        },
        {
          cdprchotk: 2,
          nmprchotk: 'медицинские противопоказания',
        },
        {
          cdprchotk: 3,
          nmprchotk: 'прочие причины',
        },
        {
          cdprchotk: 4,
          nmprchotk: 'ранее проведенные',
        },
      ]);

    apparCompact = () => Promise.resolve(
      [
        {
          cdappar: 0,
          nmappar: '',
        },
        {
          cdappar: 1,
          nmappar: 'эндоскопическая',
        },
        {
          cdappar: 2,
          nmappar: 'лазерная',
        },
        {
          cdappar: 3,
          nmappar: 'криогенная',
        },
      ]);

    oslogCompact = () => Promise.resolve(
      [
        {
          cdoslog: 0,
          nmoslog: '',
        },
        {
          cdoslog: 1,
          nmoslog: 'I. Любые отклонения от нормального послеоперационного течения, не требующие медикаментозного лечения',
        },
        {
          cdoslog: 2,
          nmoslog: 'II. Требуется лечение в виде гемотрансфузии, энтерального или парентерального питания',
        },
        {
          cdoslog: 3,
          nmoslog: 'III. Требуется хирургическое, эндоскопические или радиологическое вмешательство',
        },
        {
          cdoslog: 4,
          nmoslog: 'IIIa. Вмешательство без общего обезболивания',
        },
        {
          cdoslog: 5,
          nmoslog: 'IIIb. Вмешательство под общим обезболиванием',
        },
        {
          cdoslog: 6,
          nmoslog: 'IV. Жизнеугрожающие осложнения (включая осложнения со стороны ЦНС)',
        },
        {
          cdoslog: 7,
          nmoslog: 'IVa. Недостаточность одного органа',
        },
        {
          cdoslog: 8,
          nmoslog: 'IVb. Полиорганная недостаточность',
        },
        {
          cdoslog: 9,
          nmoslog: 'V. Смерть больного',
        },
      ]);

    addTicketDiagn = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/diagn_add',
        data,
      )
    };

    updateTicketDiagn = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/diagn_update',
        data,
      )
    };

    deleteTicketDiagn = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/diagn_delete',
        data,
      )
    };

    addTicketPos = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pos_add',
        data,
      )
    };

    updateTicketPos = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pos_update',
        data,
      )
    };

    deleteTicketPos = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pos_delete',
        data,
      )
    };

    addTickettUslug = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/uslug_add',
        data,
      )
    };

    updateTickettUslug = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/uslug_update',
        data,
      )
    };

    deleteTickettUslug = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/uslug_delete',
        data,
      )
    };

    addSotrnaprfrom = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slsotrnaprfrom_insert',
        data,
      )
    };

    configTicket = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/config_ticket',
        data,
      )
    };

    makeSlobsuslugStandart = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/make_slobsuslug_standart',
        data,
      )
    };

    makeSeveralPos = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/make_several_pos',
        data,
      )
    };

    loadNaprVypisan= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/napr_vypisan_list',
        data,
      )
    };

    addNaprVypisan = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/napr_vypisan_add',
        data,
      )
    };

    updateNaprVypisan = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/napr_vypisan_update',
        data,
      )
    };

    deleteNaprVypisan = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/napr_vypisan_delete',
        data,
      )
    };

    loadPacFamily= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/list_pacfamily',
        data,
      )
    };

    addPacFamily = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacfamily_add',
        data,
      )
    };

    updatePacFamily = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacfamily_update',
        data,
      )
    };

    deletePacFamily = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacfamily_delete',
        data,
      )
    };

    slstatusrodCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slstatusrod_compact',
        data,
      )
    };

    updateDocNapr = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/docnapr_update',
        data,
      )
    };

    deleteDocNapr = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/docnapr_delete',
        data,
      )
    };

    sendEgisz= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/sendegisz',
        data,
      )
    };

    deleteRIR= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/rir_delete',
        data,
      )
    };

    netDa = () => Promise.resolve(
      [
        {
          cd: 0,
          nm: 'нет',
        },
        {
          cd: 1,
          nm: 'да',
        },
      ]);

    otricPoloj = () => Promise.resolve(
      [
        {
          cd: 0,
          nm: 'Отрицат.',
        },
        {
          cd: 1,
          nm: 'Положит.',
        },
      ]);

    otricPolojYear = () => Promise.resolve(
      [
        {
          cd: 0,
          nm: 'Отрицат.',
        },
        {
          cd: 1,
          nm: 'В детстве',
        },
        {
          cd: 2,
          nm: 'Укажите год',
        },
      ]);

    pacientBolezn = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacient_bolezn',
        data,
      )
    };

    pacientBoleznUpdate = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/pacient_bolezn_update',
        data,
      )
    };

    colorCompact = () => Promise.resolve(
      [
        {
          cdcolor: '#ffffff',
          nmcolor: 'Белый',
          image: {
            children: <div
              style={{ display: 'inline-block', marginRight: '5px', background: '#ffffff', borderRadius: '50%', width: '15px', height: '15px' }}
            /> },
        },
        {
          cdcolor: '#c0c0c0',
          nmcolor: 'Серый',
          image: {
            children: <div
              style={{ display: 'inline-block', marginRight: '5px', background: '#c0c0c0', borderRadius: '50%', width: '15px', height: '15px' }}
            /> },
        },
        {
          cdcolor: '#808080',
          nmcolor: 'Темно-серый',
          image: {
            children: <div
              style={{ display: 'inline-block', marginRight: '5px', background: '#808080', borderRadius: '50%', width: '15px', height: '15px' }}
            /> },
        },
        {
          cdcolor: '#000000',
          nmcolor: 'Черный',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#000000', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#800000',
          nmcolor: 'Темно-красный',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#800000', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#ff0000',
          nmcolor: 'Красный',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#ff0000', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#ffa500',
          nmcolor: 'Оранжевый',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#ffa500', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#ffff00',
          nmcolor: 'Желтый',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#ffff00', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#808000',
          nmcolor: 'Оливковый',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#808000', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#00ff00',
          nmcolor: 'Светло-зеленый',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#00ff00', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#008000',
          nmcolor: 'Зеленый',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#008000', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#00ffff',
          nmcolor: 'Голубой',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#00ffff', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#0000ff',
          nmcolor: 'Синий',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#0000ff', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#000080',
          nmcolor: 'Темно-синий',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#000080', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#008080',
          nmcolor: 'Сине-зеленый',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#008080', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#ff00ff',
          nmcolor: 'Розовый',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#ff00ff', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
        {
          cdcolor: '#800080',
          nmcolor: 'Фиолетовый',
          image: {
      children: <div
        style={{ display: 'inline-block', marginRight: '5px', background: '#800080', borderRadius: '50%', width: '15px', height: '15px' }}
      /> },
        },
      ]);

    saveUserConfig = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/save_user_config',
        data,
      )
    };

    critv024rbCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/critv024_rb_compact',
        data,
      )
    };

    critv024shCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/critv024_sh_compact',
        data,
      )
    };

    critv024mtCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/critv024_mt_compact',
        data,
      )
    };

    critv024ifCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/critv024_if_compact',
        data,
      )
    };

    critv024mgiCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/critv024_mgi_compact',
        data,
      )
    };

    critv024pbtCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/critv024_pbt_compact',
        data,
      )
    };

    critv024epCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/critv024_ep_compact',
        data,
      )
    };

    critv024itCompact = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/critv024_it_compact',
        data,
      )
    };

    calcFksg = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/calc_fksg',
        data,
      )
    };

    calcNdpb = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/get_ndpb',
        data,
      )
    };

    slonkstadCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slonkstad_compact',
        data,
      )
    };

    slonktumorCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slonktumor_compact',
        data,
      )
    };

    slonknodusCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slonknodus_compact',
        data,
      )
    };

    slonkmetastCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slonkmetast_compact',
        data,
      )
    };

    slonktiplechlCompact= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slonktiplechl_compact',
        data,
      )
    };

    listSlonklek= (
      data = {},
    ) => {
      return this.getData(
        '/ticket/slonklek_list',
        data,
      )
    };

    oneOnko = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/doconksttnm_one',
        data,
      )
    };

    updateOnko = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/doconksttnm_update',
        data,
      )
    };

    updateLekarstvo = (
      data = {},
    ) => {
      return this.getData(
        '/ticket/doconklek_update',
        data,
      )
    };
}

export default new TicketsAPI();
