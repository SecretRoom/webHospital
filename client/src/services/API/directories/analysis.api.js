import MainAPI from '../main.api';

class AnalysisAPI extends MainAPI {
  fetchLabUslTree() {
    return this.getData('/directory/labusltree_for_containers')
  }

  fetchContainer(id) {
    return this.getData('/directory/get_containers_sllabcontobsusl', { cdobsusl: id })
  }

  fetchAllContainers() {
    return this.getData('/directory/get_all_containers')
  }

  removeContainer(container, uslug) {
    return this.getData('/directory/labcontainer_obsusl_del', { cdcontainer: container, cdobsusl: uslug })
  }

  setContainer(container, uslug) {
    return this.getData('/directory/labcontainer_obsusl_add', { cdcontainer: container, cdobsusl: uslug })
  }
}
export default new AnalysisAPI();
