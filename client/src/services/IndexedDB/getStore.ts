/* eslint-disable class-methods-use-this */
import * as R from 'ramda'
import { NAME_INDEXED_DB } from '../../config';
import IndexedDB from '.'

let list: any[]
class GetStore {
  omsCopanies(id: string | undefined): any {
    IndexedDB.getDS(
      NAME_INDEXED_DB.nameDB,
      NAME_INDEXED_DB.nameDS.omsCompanies,
      NAME_INDEXED_DB.version,
    ).then(res => { list = res })
    if (R.isNil(id)) { return list }
    const name = JSON.parse(JSON.stringify(
      R.find(R.propEq('id', id))(list),
    )).name
    return name
  }
}

export default new GetStore();
