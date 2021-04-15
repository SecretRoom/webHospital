import MainAPI from '../main.api';
/**
 * API для получения данных таблиц(observer)
 *
 * @class ObserverAPI
 * @extends {MainAPI}
 */
class ObserverAPI extends MainAPI {
  /** Получение сводных таблиц */
  getAreaTable(): Promise<Response> {
    return this.getData('/observer/jsonarea')
  }
}

export default new ObserverAPI();
