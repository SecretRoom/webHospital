/* eslint-disable class-methods-use-this */
import MainAPI from '../main.api';

class CardOfSotrAPI extends MainAPI {
    deleteSotr = (
      data,
    ) => {
      return this.getData(
        '/directories/delete_slsotr',
        data,
      )
    }

    addSotr = (
      data,
    ) => {
      return this.getData(
        '/directories/add_slsotr',
        data,
      )
    }

    updateSotr = (
      data,
    ) => {
      return this.getData(
        '/directories/update_slsotr',
        data,
      )
    }

    addPerson = (
      data,
    ) => {
      return this.getData(
        '/directories/add_person',
        data,
      )
    }

      updatePerson = (
        data,
      ) => {
        return this.getData(
          '/directories/update_person',
          data,
        )
      }

      deletePerson = (
        data,
      ) => {
        return this.getData(
          '/directories/delete_person',
          data,
        )
      }

      loadSotr = (
        data,
      ) => {
        return this.getData(
          '/directories/sotrs',
          data,
        )
      }

      loadSpecialty = (
        data,
      ) => {
        return this.getData(
          '/directories/specialty',
          data,
        )
      }

      loadNmprofAndNmotdel = (
        data = {},
      ) => {
        return this.getData(
          '/directories/nmprof_and_nmotdel',
          data,
        )
      }

      loadProfiels = (
        data = {},
      ) => {
        return this.getData(
          '/directories/profiels',
          data,
        )
      }

      loadOtdel = (
        data = {},
      ) => {
        return this.getData(
          '/directories/otdel',
          data,
        )
      }

      loadPosts= (
        data = {},
      ) => {
        return this.getData(
          '/directories/posts',
          data,
        )
      }

      loadUchastki = (
        data = {},
      ) => {
        return this.getData(
          '/directories/uchastki',
          data,
        )
      }

      test = (
        data = {},
      ) => {
        return this.getData(
          '/directories/test',
          data,
        )
      }
}

export default new CardOfSotrAPI();
