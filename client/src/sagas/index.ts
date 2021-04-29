import { spawn } from 'redux-saga/effects';

import authSagas from '../containers/Auth/sagas';

export default function* rootSagas():any {
  yield spawn(authSagas)
}
