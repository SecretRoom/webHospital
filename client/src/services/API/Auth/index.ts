/* eslint-disable class-methods-use-this */
import MainAPI from '../main.api';
// import { DirectionsOriginData, VotingData } from '../../../containers/MedicalCommission/interfaces';
/**
 * API для получения данных назначений на ВК
 *
 * @class CommissionAPI
 * @extends {MainAPI}
 */
class AuthAPI extends MainAPI {
  /** Получение списка сотрудников ВК */
  auth(data: { userName: string, password: string }): Promise<Response> {
    return this.getData('/auth/login', data)
  }
}

export default new AuthAPI();
