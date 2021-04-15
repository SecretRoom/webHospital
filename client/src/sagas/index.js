import { spawn } from 'redux-saga/effects';

import { saga as sotrListSaga } from '../containers/Auth/sotrList.actions'

export default function* rootSagas() {
  yield spawn(sotrListSaga)
}
