/* eslint-disable class-methods-use-this */
import * as R from 'ramda'
import { NAME_INDEXED_DB } from '../../config';
import IndexedDB from './index'

let list: any[]
class GetStore {
  async omsCopanies(id: string | undefined): Promise<any> {
    await IndexedDB.getDS(
      NAME_INDEXED_DB.nameDS.omsCompanies,
    ).then(res => {
      const sort = R.sortBy(R.prop('name'))
      list = sort(res)
    })
    if (R.isNil(id)) { return list }
    const name = JSON.parse(JSON.stringify(
      R.find(R.propEq('id', id))(list),
    )).name
    return name
  }

  async examTypes(id: string | undefined): Promise<any> {
    await IndexedDB.getDS(
      NAME_INDEXED_DB.nameDS.examTypes,
    ).then(res => {
      const sort = R.sortBy(R.prop('name'))
      list = sort(res)
    })
    if (R.isNil(id)) { return list }
    const name = JSON.parse(JSON.stringify(
      R.find(R.propEq('id', id))(list),
    )).name
    return name
  }
}

export default new GetStore();
