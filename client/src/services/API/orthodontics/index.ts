/* eslint-disable class-methods-use-this */
import MainAPI from '../main.api';
/**
 * @class AuthAPI
 * @extends {MainAPI}
 */
class OrthodonticsAPI extends MainAPI {
  getTeethAnomalies(cdent: string): Promise<ResponseType> {
    return this.getData('/examination/getstomanomaly', { cdent })
  }

  editTeethAnomalies(data: any): Promise<ResponseType> {
    return this.getData('/examination/editstomanomaly', data)
  }
}

export default new OrthodonticsAPI();
