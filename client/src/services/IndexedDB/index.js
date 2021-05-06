import * as idb from 'idb'

let dataBase = null
let allList = null

class IndexedDB {
  // Создание базы данных и хранилища

  async createDB(nameDB, nameDS, version, list) {
    try {
      let create = false
      dataBase = await idb.openDB(nameDB, version, {
        async upgrade(db) {
          db.createObjectStore(nameDS, { keyPath: 'id', autoIncrement: true })
          create = true
        },
      })
      if (create) {
        this.tx = await dataBase.transaction(nameDS, 'readwrite')
        list.forEach(async (item) => {
          await this.tx.store.add({
            id: item._id,
            name: item.name,
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
  async deleteDB(nameDB) {
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

  /* Получение store */
  async getDS(nameDB, nameDS, version) {
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
