import { takeEvery, put, call } from 'redux-saga/effects'
import API from '../../services/API/patientList.api'

const modulename = 'sotrList'

export const FETCH_SOTR_LIST_REQUEST = `${modulename}/sotrList:fetch_sotr_list:request`
export const FETCH_SOTR_LIST_SUCCESS = `${modulename}/fetch_sotr_list:success`
export const FETCH_SOTR_LIST_ERROR = `${modulename}/fetch_sotr_list:error`

export const getSotrList = () => ({ type: FETCH_SOTR_LIST_REQUEST })

const getSotrListSaga = function* () {
  try {
    const data = yield call([API, API.getSotrList])
    yield put({
      type: FETCH_SOTR_LIST_SUCCESS,
      payload: data.items ? data.items : data,
    })
  } catch (error) {
    yield put({
      type: FETCH_SOTR_LIST_ERROR,
      error,
    })
  }
}

export const saga = function* () {
  yield takeEvery(FETCH_SOTR_LIST_REQUEST, getSotrListSaga)
}

export default saga
