/* eslint-disable class-methods-use-this */
import MainAPI from '../main.api';

class LpuAPI extends MainAPI {
    addLpu = (
      data,
    ) => {
      return this.getData(
        '/directories/insert_into_sllpu',
        data,
      )
    }

    updateLpu = (
      data,
    ) => {
      return this.getData(
        '/directories/update_sllpu',
        data,
      )
    }

    deleteLpu = (
      data,
    ) => {
      return this.getData(
        '/directories/delete_sllpu',
        data,
      )
    }

      loadLpu = (
        data,
      ) => {
        return this.getData(
          '/directories/get_list_lpu',
          data,
        )
      }
}

export default new LpuAPI();
