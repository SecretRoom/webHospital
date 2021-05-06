import { takeEvery, call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { ActionType } from 'typesafe-actions';
import * as R from 'ramda'
import moment from 'moment';
import ExaminationAPI from '../../../services/API/Examination'
import { createExamA, fetchExamListA, selectExamA } from './actions';
import { idPatS } from '../selectors';
import { idEmplS } from '../../UserService/selectors';

function* fetchExamListSaga(): SagaIterator {
  try {
    const idPat = yield select(state => idPatS(state))
    const { status, items } = yield call([ExaminationAPI, ExaminationAPI.getExamList], idPat)
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
      dateExam: new Date(),
    })

    if (status !== '1') {
      yield put(createExamA.success())
      yield put(selectExamA(id))
      yield put(fetchExamListA.request())
    }
  } catch (error) {
    yield put(createExamA.failure(error))
  }
}

export default function* (): SagaIterator {
  yield takeEvery(createExamA.request, createExamSaga)
  yield takeEvery(fetchExamListA.request, fetchExamListSaga)
}
