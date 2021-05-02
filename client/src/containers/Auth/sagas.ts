import { takeEvery, call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { SagaIterator } from 'redux-saga';
import {
  authA, logoutA,
} from './actions';

import AuthAPI from '../../services/API/Auth'
import { getUserDataA, notification } from '../../actions';

/**
 * Вход в приложение
 * @param action
 */
function* authSaga(action: ActionType<typeof authA.request>): SagaIterator {
  try {
    const { status, userID } = yield call([AuthAPI, AuthAPI.auth], action.payload)

    if (status !== '1') {
      sessionStorage.setItem('userID', userID)
      yield put(authA.success({ userID, isAuth: true }))
      yield put(getUserDataA.request())
    }
  } catch (error) {
    yield put(authA.failure(error))
  }
}

// eslint-disable-next-line require-yield
function* logoutSaga(): SagaIterator {
  localStorage.clear()
  sessionStorage.clear()
}

export default function* (): SagaIterator {
  yield takeEvery(authA.request, authSaga)
  yield takeEvery(logoutA, logoutSaga)
}
