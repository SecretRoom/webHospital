/* eslint-disable camelcase,no-unused-vars,no-undef */
import MainAPI from '../main.api';

/**
 * API для справочников регистратуры
 *
 * @class SlAPI
 * @extends {MainAPI}
 */
class SlAPI extends MainAPI {
    slvidpriem= (
    ) => {
      return this.getData(
        '/slvidpriem/list_compact',
      )
    };

    sllimitpriem=() => {
      return this.getData(
        '/docpriem/sllimitpriem',
      )
    }
}

window.api = new SlAPI();

export default new SlAPI();
