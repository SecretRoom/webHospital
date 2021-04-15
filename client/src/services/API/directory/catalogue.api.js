import MainAPI from '../main.api';

/**
 * API для страницы "Типы документов"
 *
 * @class CatalogueAPI
 * @extends {MainAPI}
 */
class CatalogueAPI extends MainAPI {
  load = (
    data,
  ) => {
    return this.getData(
      '/catalogue/load',
      data,
    )
  };
}

export default new CatalogueAPI();
