import API from '../../services/API/protocols.api'
import IndexedDB from '../../services/indexedDB/ICD'

export default async function createOrCheckICD (nameBD, nameDS) {
  let load = []
  // добавить запрос на получение версии БД
  const dbVersion = 1

  await API.getListOfDiagnosis().then(async(res) => {
    if (res.diags) {
      await IndexedDB.createDB(nameBD, nameDS, dbVersion, res.diags).then((res) => {
        load = res
      })
    }
  })

  return load
}
