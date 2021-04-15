import MainAPI from '../main.api';

class ContainerTypesAPI extends MainAPI {
  fetchLabContainer() {
    return this.getData('/directory/getcontainer')
  }

  removeContainer(id) {
    return this.getData('/directory/deletecontainer', { cdcontainer: id })
  }

  insertContainer(data) {
    return this.getData('/directory/insertcontainer', data)
  }

  updateContainer(data) {
    return this.getData('/directory/updatecontainer', data)
  }
}
export default new ContainerTypesAPI();
