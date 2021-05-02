import MainAPI from '../main.api';

class UserDataAPI extends MainAPI {
  /** Получение списка сотрудников ВК */
  getUserData(idEmpl: string[]): Promise<Response> {
    return this.getData('/directories/staff', { idEmpl })
  }
}

export default new UserDataAPI();
