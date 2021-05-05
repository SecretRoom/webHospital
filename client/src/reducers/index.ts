/* eslint-disable import/no-named-default */
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { LOG_OUT } from '../containers/Auth/types'

import { default as authReducer } from '../containers/Auth/reducer'
import { default as userData } from '../containers/UserService/reducer'
import { default as notification } from '../containers/Blocks/Notification/reducer';
import { default as global } from '../containers/Global/reducer';
import { default as patients } from '../containers/Patients/reducer';

// export { getDate, getF1HintStatus, getF2HintStatus } from '../containers/Global/reducer'
// export * from '../containers/Protocols/reducer'

export const rootReducer = (history: any): any => (state: any, action: any) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    userData,
    notification,
    global,
    patients,
  })

  if (action.type === LOG_OUT) {
    // eslint-disable-next-line no-param-reassign
    state = undefined
  }
  return appReducer(state, action)
}
