import { spawn } from 'redux-saga/effects';

import authSagas from '../containers/Auth/sagas';
import userDataSagas from '../containers/UserService/sagas';
import patientsSagas from '../containers/Patients/sagas';

export default function* rootSagas(): any {
  yield spawn(authSagas)
  yield spawn(userDataSagas)
  yield spawn(patientsSagas)
}
