import MainAPI from '../main.api';

class AuthAPI extends MainAPI {
  /** Получение списка сотрудников ВК */
  auth(data: { userName: string, password: string }): Promise<Response> {
    return this.getData('/auth/login', data)
  }
}

export default new AuthAPI();
