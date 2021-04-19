// import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

// import { LOG_OUT } from '../actions';
// import { default as authReducer } from '../containers/Auth/reducer';
// import { default as userService } from '../containers/Auth/userService.reducer';
// import { default as sotrList } from '../containers/Auth/sotrList.reducer'

// export * from '../containers/Auth/reducer';
// export * from '../containers/Auth/userService.reducer';

// export const rootReducer = (history) => (state, action) => {
//   const appReducer = combineReducers({
//     router: connectRouter(history),
//     auth: authReducer,
//     userData: userService,
//     sotrList,
//   });

//   if (action.type === LOG_OUT) {
//     localStorage.clear();
//     // eslint-disable-next-line no-param-reassign
//     state = undefined;
//   }
//   return appReducer(state, action);
// };
