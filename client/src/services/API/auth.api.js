/* eslint-disable class-methods-use-this */
import MainAPI from './main.api';

/**
 * API для авторизации и получения данных пользователя
 *
 * @class AuthAPI
 * @extends {MainAPI}
 */
class AuthAPI extends MainAPI {
  /**
   * Авторизация
   *
   * @param {string} username - Имя пользователя
   * @param {string} password - Пароль
   * @returns Успех - access token + данные пользователя
   * @memberof AuthAPI
   */
  auth(username, password) {
    return this.getData('/auth/login', { username, password });
  }

  /**
  * Получение списка профилей
  *
  * @returns Данные пользователя
  * @memberof AuthAPI
  */
  getProfileList() {
    return this.getData('/auth/otdproflist');
  }

  /**
  * Получение версии приложения
  *
  * @returns версия приложения
  * @memberof AuthAPI
  */
  getAppVersion() {
    return this.getData('/auth/version');
  }
}

export default new AuthAPI();
