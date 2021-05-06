import { takeEvery, call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as R from 'ramda'
import PatientAPI from '../../services/API/Patient'
import { fetchPatientA } from './actions';
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

export default function* (): SagaIterator {
  yield takeEvery(fetchPatientA.request, fetchPatientSaga)
}
