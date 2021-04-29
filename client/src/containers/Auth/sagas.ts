import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { SagaIterator } from 'redux-saga';
import * as R from 'ramda'
import {
  authA,
} from './actions';

import AuthAPI from '../../services/API/Auth'
import { notification } from '../../actions';


/**
 * Вход в приложение
 * @param action
 */
function* authSaga(action: ActionType<typeof authA.request>): SagaIterator {
  try {
    const { status, items } = yield call([AuthAPI, AuthAPI.auth], action.payload)

    if (status !== '1') {
      yield put(authA.success(true))
    }
  } catch (error) {
    yield put(authA.failure(error))
  }
}

export default function* (): SagaIterator {
  yield takeEvery(authA.request, authSaga)
}
