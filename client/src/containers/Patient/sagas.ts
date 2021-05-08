import { takeEvery, call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as R from 'ramda'
import { ActionType } from 'typesafe-actions';
import PatientAPI from '../../services/API/Patient'
import { fetchPatientA, updatePatientA } from './actions';
import { idPatS } from './selectors';

function* fetchPatientSaga(): SagaIterator {
  try {
    const idPat = yield select(state => idPatS(state))
    const { status, items } = yield call([PatientAPI, PatientAPI.getPatient], idPat)

    if (status !== '1') {
      yield put(fetchPatientA.success(items[0]))
    }
  } catch (error) {
    yield put(fetchPatientA.failure(error))
  }
}

function* updatePatientSaga(action: ActionType<typeof updatePatientA.request>): SagaIterator {
  try {
    const idPat = yield select(state => idPatS(state))
    const { status } = yield call([PatientAPI, PatientAPI.updatePatient], idPat, action.payload)

    if (status !== '1') {
      yield put(updatePatientA.success())
      yield put(fetchPatientA.request())
    }
  } catch (error) {
    yield put(updatePatientA.failure(error))
  }
}

export default function* (): SagaIterator {
  yield takeEvery(fetchPatientA.request, fetchPatientSaga)
  yield takeEvery(updatePatientA.request, updatePatientSaga)
}
