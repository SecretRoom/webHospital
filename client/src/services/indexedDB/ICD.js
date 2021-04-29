import * as idb from 'idb'
import * as R from 'ramda'

let dataBase = null
let allList = null

class IndexedDB {
  // Создание базы данных и хранилища

  async createDB(nameDB, nameDS, version, diags) {
    try {
      let create = false
      dataBase = await idb.openDB(nameDB, version, {
        async upgrade (db) {
          db.createObjectStore(nameDS, { keyPath: 'id', autoIncrement: true })
          create = true
        },
      })
      if (create) {
        this.tx = await dataBase.transaction(nameDS, 'readwrite')
        diags.forEach(async(item) => {
          await item.diagnlist.forEach(async(elem) => {
            await this.tx.store.add({
              fullname: elem.fullname,
              id: elem?.id,
              name: elem?.name,
              grpname: item?.grpname,
            })
          })
        })
        await this.tx.done
      }
      if (dataBase.objectStoreNames.contains(nameDS)) {
        create = true
      }
      return create
    } catch {
      return false
    }
  }

  // удаление базы данных

  async deleteDB (nameDB) {
    try {
      this.delete = await idb.deleteDB(nameDB, {
        blocked() {
          dataBase.close()
        },
      });
      return true
    } catch {
      return false
    }
  }

  // поиск по id

  async searchDiagnDBbyID (search, nameDB, nameDS, version) {
    try {
      if (!dataBase) {
        dataBase = await idb.openDB(nameDB, version)
      }
      this.tx = await dataBase.transaction(nameDS, 'readonly')
      const store = await this.tx.objectStore(nameDS)
      if (!allList) {
        allList = await store.getAll().then(res => res)
      }
      const searchID = item => item.id.toLowerCase().indexOf(search.toLowerCase()) !== -1
      const list = R.filter(searchID, allList);
      return list
    } catch (err) {
      return []
    }
  }

  // поиск по наименованию

  async searchDiagnDBbyName (search, nameDB, nameDS, version) {
    try {
      if (!dataBase) {
        dataBase = await idb.openDB(nameDB, version)
      }
      this.tx = await dataBase.transaction(nameDS, 'readonly')
      const store = await this.tx.objectStore(nameDS)
      if (!allList) {
        allList = await store.getAll().then(res => res)
      }
      const searchID = item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      const list = R.filter(searchID, allList);
      return list
    } catch (err) {
      return []
    }
  }

  // поиск

  async searchDiagnDB (search, nameDB, nameDS, version) {
    try {
      if (!dataBase) {
        dataBase = await idb.openDB(nameDB, version)
      }
      this.tx = await dataBase.transaction(nameDS, 'readonly')
      const store = await this.tx.objectStore(nameDS)
      if (!allList) {
        allList = await store.getAll().then(res => res)
      }
      const searchID = item => item.fullname.toLowerCase().indexOf(search.toLowerCase()) !== -1
      const list = R.filter(searchID, allList);
      return list
    } catch (err) {
      return []
    }
  }

  // получение списка диагнозов

  async getAllDiagnList(nameDB, nameDS, version) {
    try {
      if (!dataBase) {
        dataBase = await idb.openDB(nameDB, version)
      }
      this.tx = await dataBase.transaction(nameDS, 'readonly')
      const store = await this.tx.objectStore(nameDS)
      if (!allList) {
        allList = await store.getAll().then(res => res)
      }
      return allList
    } catch (err) {
      return []
    }
  }
}

export default new IndexedDB();
