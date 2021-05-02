import { spawn } from 'redux-saga/effects';

import authSagas from '../containers/Auth/sagas';
import userDataSagas from '../containers/UserService/sagas';

export default function* rootSagas(): any {
  yield spawn(authSagas)
  yield spawn(userDataSagas)
}
