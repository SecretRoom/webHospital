/* eslint-disable import/no-named-default */
/* eslint-disable import/export */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { LOG_OUT } from '../actions';
// import { default as authReducer } from '../containers/Auth/reducer';
// import { default as notification } from '../containers/Blocks/Notification/reducer';
// import { default as userService } from '../containers/Auth/userService.reducer';
// import { default as reception } from '../containers/Reception/receprion';
// import { default as patients } from '../containers/Patients/PatientList/reducer';
// import { default as patient } from '../containers/Patient/reducer';
// import { default as personaldata } from '../containers/Patient/PatientPersonalData/reducer';
// import { default as protocols } from '../containers/ProtocolsV2/reducers.ts';
// import { default as imageAnalizes } from '../containers/ImageAnalizes/reducer';
// import { default as biomaterials } from '../containers/Biomaterials/reducer';
// import { default as directories } from '../containers/Directories/reducer';
// import { default as global } from '../containers/Global/reducer';
// import { default as registry } from '../containers/Registry/reducer';
// import { moduleName as invoicesModule } from '../containers/Patient/Invoices/actions';
// import { default as invoicesReducer } from '../containers/Patient/Invoices/reducer';
// import { default as tickets } from '../containers/Tickets/reducer';
// import { default as hospital } from '../containers/Hospital/hospital'
// import { default as referralPatients } from '../containers/Hospital/ReferralPatients/referralPatients'
// import { default as movingPatient } from '../containers/Hospital/MovingPatient/movingPatient'
// import { default as observation } from '../containers/Hospital/Observation/observation'
// import { default as appointments } from '../containers/Hospital/Appointments/appointments'
// import { default as reports } from '../containers/Reports/reports';
// import { default as dentitions } from '../containers/Common/ParameterRender/Dentitions/reducers.ts'
// import { default as externalOrganizations } from '../containers/Patient/ExternalOrganizations/reducer';
// import { default as orthodontics } from '../containers/Common/ParameterRender/Orthodontics/reducers.ts'
// import { default as statistika } from '../containers/Statistika/reducer';
// import { default as commission } from '../containers/MedicalCommission/reducers.ts'
// import { default as sotrList } from '../containers/Auth/sotrList.reducer'
// import { default as ekonomika } from '../containers/Ekonomika/reducer';
// import { default as uploading } from '../containers/Uploading/reducer';
// import { default as mailMonitoring } from '../containers/MailMonitoring/reducer'
// import { default as parameterRenderLists } from '../containers/Common/ParameterRender/ParametersWithLists/reducer'

// export * from '../containers/Auth/reducer';
// export * from '../containers/Auth/userService.reducer';
// export { getDate, getF1HintStatus, getF2HintStatus } from '../containers/Global/reducer';
// export * from '../containers/Protocols/reducer';

export const rootReducer = (history) => (state, action) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    // global,
    // notification,
    // auth: authReducer,
    // userData: userService,
    // sotrList,
    // reception,
    // patients,
    // patient: combineReducers({
    //   data: patient,
    //   personaldata,
    //   protocols,
    //   [invoicesModule]: invoicesReducer,
    //   dentitions,
    //   externalOrganizations,
    //   orthodontics,
    // }),
    // imageAnalizes,
    // biomaterials,
    // directories,
    // registry,
    // tickets,
    // hospital,
    // referralPatients,
    // movingPatient,
    // observation,
    // appointments,
    // reports,
    // statistika,
    // commission,
    // ekonomika,
    // uploading,
    // mailMonitoring,
    // parameterRenderLists,
  });

  if (action.type === LOG_OUT) {
    localStorage.clear();
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};
