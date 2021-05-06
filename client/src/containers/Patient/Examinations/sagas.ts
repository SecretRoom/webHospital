import { takeEvery, call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { ActionType } from 'typesafe-actions';
import * as R from 'ramda'
import ExaminationAPI from '../../../services/API/Examination'
import { createExamA, fetchExamListA, selectExamA } from './actions';
import { idPatS } from '../selectors';
import { idEmplS } from '../../UserService/selectors';
import IndexedDB from '../../../services/IndexedDB';
import { NAME_INDEXED_DB } from '../../../config';

function* fetchExamListSaga(): SagaIterator {
  try {
    const idPat = yield select(state => idPatS(state))
    const { status, items } = yield call([ExaminationAPI, ExaminationAPI.getExamList], idPat)
    const dataExamTypes = yield call([ExaminationAPI, ExaminationAPI.getExamTypeList])
    IndexedDB.createDB(
      NAME_INDEXED_DB.nameDB,
      NAME_INDEXED_DB.nameDS.examTypes,
      NAME_INDEXED_DB.version,
      dataExamTypes.items,
    )
    if (status !== '1') {
      yield put(fetchExamListA.success(items))
    }
  } catch (error) {
    yield put(fetchExamListA.failure(error))
  }
}

function* createExamSaga(action: ActionType<typeof createExamA.request>): SagaIterator {
  try {
    const idPat = yield select(state => idPatS(state))
    const idEmpl = yield select(state => idEmplS(state))
    const { status, id } = yield call([ExaminationAPI, ExaminationAPI.createExam], {
      idPat,
      idCreateEmpl: idEmpl,
      idExamType: action.payload,
      dateExam: new Date().toString(),
    })

    if (status !== '1') {
      yield put(createExamA.success())
      yield put(selectExamA(id))
    }
  } catch (error) {
    yield put(createExamA.failure(error))
  }
}

export default function* (): SagaIterator {
  yield takeEvery(createExamA.request, createExamSaga)
  yield takeEvery(fetchExamListA.request, fetchExamListSaga)
}
