/* eslint-disable import/no-named-default */
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// import { LOG_OUT } from '../actions'
import { default as authReducer } from '../containers/Auth/reducer'

// export * from '../containers/Auth/reducer'
// export * from '../containers/Auth/userService.reducer'
// export { getDate, getF1HintStatus, getF2HintStatus } from '../containers/Global/reducer'
// export * from '../containers/Protocols/reducer'

export const rootReducer = (history: any):any => (state: any, action:any) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  })

  // if (action.type === LOG_OUT) {
  //   localStorage.clear()
  //   // eslint-disable-next-line no-param-reassign
  //   state = undefined
  // }
  return appReducer(state, action)
}
