import { spawn } from 'redux-saga/effects';

import authSagas from '../containers/Auth/sagas';
import userDataSagas from '../containers/UserService/sagas';
import patientsSagas from '../containers/Patients/sagas';
import patientSagas from '../containers/Patient/sagas';
import examinationSagas from '../containers/Patient/Examinations/sagas';

export default function* rootSagas(): any {
  yield spawn(authSagas)
  yield spawn(patientSagas)
  yield spawn(userDataSagas)
  yield spawn(patientsSagas)
  yield spawn(examinationSagas)
}
