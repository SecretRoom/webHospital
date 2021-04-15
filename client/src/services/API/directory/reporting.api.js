import MainAPI from '../main.api';

/**
 * API для страницы "Отчеты"
 *
 * @class ReportingAPI
 * @extends {MainAPI}
 */
class ReportingAPI extends MainAPI {
    loadReportView = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/report_view_list',
        data,
      )
    };

    loadReportParams = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/report_params',
        data,
      )
    };

    loadReportConfig = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/zadach_params',
        data,
      )
    };

    loadReportResults = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/load_reportresult',
        data,
      )
    };

    deleteReportResults = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportresult_delete',
        data,
      )
    };

    deleteReportResultsbyPacket = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportresult_packet_delete',
        data,
      )
    };

    deleteToDateReportResults = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportresult_by_date_delete',
        data,
      )
    };

    loadReporting = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reports_list',
        data,
      )
    };

    loadReportingColumns = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/columns_list',
        data,
      )
    };

    loadReportingResultColumns = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/columns_result_list',
        data,
      )
    };

    visibleTypeCompact = () => Promise.resolve(
      [
        {
          visibletype: ' ',
          visibletyper: '',
        },
        {
          visibletype: 'headerBegin',
          visibletyper: 'Начало группы',
        },
        {
          visibletype: 'headerEnd',
          visibletyper: 'Конец группы',
        },
      ]);

    alignCompact = () => Promise.resolve(
      [
        {
          align: 'left',
          alignr: 'слева',
        },
        {
          align: 'center',
          alignr: 'по центру',
        },
        {
          align: 'right',
          alignr: 'справа',
        },
      ]);

    upReportingColumns = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/column_up',
        data,
      )
    };

    downReportingColumns = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/column_down',
        data,
      )
    };

    copyReportingColumns = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/columns_copy',
        data,
      )
    };

    addReportingColumns = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/columns_add',
        data,
      )
    };

    updateReportingColumns = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/columns_update',
        data,
      )
    };

    deleteReportingColumns = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/column_delete',
        data,
      )
    };

    nozolCompact = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/nozol_compact',
        data,
      )
    };

    vozrCompact = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/vozr_compact',
        data,
      )
    };

    updateNozolVozr = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/update_nozol_vozr',
        data,
      )
    };

    loadNozolVozr = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/load_nozol_vozr',
        data,
      )
    };

    addReportPeriod = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportperiod_add',
        data,
      )
    };

    updateReportPeriod = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportperiod_update',
        data,
      )
    };

    deleteReportPeriod = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportperiod_delete',
        data,
      )
    };

    loadReportPeriod = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/load_reportperiod',
        data,
      )
    };

    updateReportParams = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportparams_update',
        data,
      )
    };

    repeatReportParams = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportparams_repeat',
        data,
      )
    };

    updateReportorig = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/reportorig_update',
        data,
      )
    };

    listGroup = (
      data = {},
    ) => {
      return this.getData(
        '/statistika/groupsreport_compact',
        data,
      )
    };
}
export default new ReportingAPI();
