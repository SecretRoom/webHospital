import { takeEvery, call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getUserDataA } from './actions';
import IndexedDB from '../../services/IndexedDB'
import { userIDS } from '../Auth/selectors';
import UserDataAPI from '../../services/API/UserData'
import OmsCompaniesAPI from '../../services/API/OmsCompanies'
import ExaminationAPI from '../../services/API/Examination'
import { logoutA } from '../Auth/actions';
import { NAME_INDEXED_DB } from '../../config';

function* getUserDataSaga(): SagaIterator {
  try {
    const idEmpl = yield select(state => userIDS(state))
    const { status, items } = yield call([UserDataAPI, UserDataAPI.getUserData], [idEmpl])

    if (status !== '1') {
      yield put(getUserDataA.success(items[0]))
      const dataOmsCompanies = yield call([OmsCompaniesAPI, OmsCompaniesAPI.getOmsCompanies])
      const dataExamTypes = yield call([ExaminationAPI, ExaminationAPI.getExamTypeList])
      if (dataOmsCompanies.status !== '1' && dataExamTypes.status !== '1') {
        IndexedDB.createDB(
          NAME_INDEXED_DB.nameDB,
          {
            [NAME_INDEXED_DB.nameDS.omsCompanies]: dataOmsCompanies.items,
            [NAME_INDEXED_DB.nameDS.examTypes]: dataExamTypes.items,
          },
          NAME_INDEXED_DB.version,
        )
      }
    } else {
      yield put(logoutA())
    }
  } catch (error) {
    yield put(getUserDataA.failure(error))
    yield put(logoutA())
  }
}

export default function* (): SagaIterator {
  yield takeEvery(getUserDataA.request, getUserDataSaga)
}
