/* eslint-disable class-methods-use-this */
import MainAPI from '../main.api';
// import { statuses, data } from './mockData'
import { ToothOriginData, ToothServicesList } from '../../../containers/Common/ParameterRender/Dentitions/interfaces';
/**
 * API для авторизации и получения данных пользователя
 *
 * @class AuthAPI
 * @extends {MainAPI}
 */
class DentitionsAPI extends MainAPI {
  async getTeethData(protocolId: string): Promise<ToothOriginData> {
    return this.getData('/examination/getstomformula', {
      cdent: protocolId,
    })
  }

  getTeethReference(): Promise<ResponseType> {
    return this.getData('/examination/getstomsprav')
  }

  getTeethParams(protocolId: string): Promise<ResponseType> {
    return this.getData('/examination/getteethparams', {
      cdent: protocolId,
    })
  }

  getAllTeethServicesTable(protocolId: string): Promise<ResponseType> {
    return this.getData('/examination/getteethuslug', { cdent: protocolId })
  }

  updateTeeth(employeeId: string, teeth: ToothOriginData[]): Promise<ResponseType> {
    return this.getData('/examination/postteethiagnos', { teeth, cdsotr: employeeId })
  }

  updateTeethType(employeeId: string, teeth: ToothOriginData[]): Promise<{}> {
    return this.getData('/examination/changeteethtype', { teeth, cdsotr: employeeId })
  }

  getTeethServices(teethId: string): Promise<ResponseType> {
    return this.getData('/examination/getstomuslug', { cdtth: teethId })
  }

  addTeethService(data: Array<{}>): Promise<ResponseType> {
    return this.getData('/examination/addtoothserv', data)
  }

  editTeethService(data: Array<{}>): Promise<ResponseType> {
    return this.getData('/examination/edittoothserv', data)
  }

  deleteTeethService(data: Array<{}>): Promise<ResponseType> {
    return this.getData('/examination/deltoothserv', data)
  }

  getTeethServicesList(date: string): Promise<ToothServicesList> {
    return this.getData(`/examination/stomuslug/${date}`)
  }

  updateTeethServices(data: Array<{}>): Promise<ResponseType> {
    return this.getData('/examination/updteethserv', data)
  }

  updateParameters(teethIds: string[], parameterId: string, value: string | number, employeeId: string): Promise<{}> {
    return this.getData('/examination/postteethparams', {
      cdteeth: teethIds,
      cdpar: parameterId,
      value,
      cdsotr: employeeId,
    })
  }

  /** Получения списка выдов оплаты */
  getPaymentList(): Promise<ResponseType> {
    return this.getData('/examination/jsonsprav/slvopl/')
  }

  /** Получение списка результатов лечения */
  getTreatmentResultList(): Promise<ResponseType> {
    return this.getData('/examination/toothsprav/toothrez')
  }

  /** Получения списка стоматологических шаблонов */
  getDentitionTemplatesList(data: {
    private_flag: number
    nmlike: string
    shdia: string
    cdobstype: string
    cdsotr: string
  }): Promise<{records: any[], length: number}> {
    return this.getData('/examination/gettoothtempllist', data)
  }

  /** Применение шаблона к зубам */
  applyDentitionTemplate(data: {
    cdteeth: any[]
    cdtmpltth: string
  }): Promise<{message: string, status: string}> {
    return this.getData('/examination/teethtemplapply', data)
  }

  /** Создание стоматологического шаблона */
  createDentitionTemplate(data: {
    cdtth: string
    cdsotr: string
    nmtempl: string
    shdiafrom: string
    shdiato: string
    private_flag: number
    prof: number
  }): Promise<{message: string, status: string}> {
    return this.getData('/examination/toothtemplcreate', data)
  }

  /** Cохранение диагноза на один или несколько зубов */
  saveToothDiagnoses(data: {
    shdia: string
    cdsotr: string
    cdtths: string[]
  }): Promise<{message: string, status: string}> {
    return this.getData('/examination/editteethdiagn', data)
  }

  /**
   * Получения списка результатов лечения
   */
  getNsanList(): Promise<[{nmnsan: string, nsan: number}]> {
    return this.getData('/talon/nsan_compact')
  }
}

export default new DentitionsAPI();
