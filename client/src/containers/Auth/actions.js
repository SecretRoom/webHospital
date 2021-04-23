import { push } from 'connected-react-router';

// import API from '../../services/API/auth.api';
// import MainAPI from '../../services/API/main.api';
// import { forwardByFeature } from '../../utils/forwardByFeature';
// import objectToLocalStorage from '../../utils/localStorageUtils';
// import createOrCheckICD from '../../utils/Auth/createOrCheckICD'
// import {
//   FETCH_USER_DATA_REQUEST,
//   FETCH_USER_DATA_ERROR,
// } from './userService.actions'
// import { getSotrList } from './sotrList.actions'

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const SET_USER_DATA = 'SET_USER_DATA';
export const CHANGE_LOAD_IDB = 'CHANGE_LOAD_IDB'
export const CHANGE_FETCHING = 'CHANGE_FETCHING'

export function auth(username, password) {
  return (dispatch) => {
    // dispatch({ type: AUTH_REQUEST })
    // dispatch({
    //   type: FETCH_USER_DATA_REQUEST,
    // })
    // return API.auth(username, password)

    //   .then((data) => {
    //     try {
    //       if (data.error_code === 1) {
    //         dispatch({
    //           type: AUTH_ERROR,
    //           payload: {
    //             message: data.error,
    //           },
    //         })
    //         return false;
    //       }
    //       if (data.items.length > 0) {
    //         objectToLocalStorage(data.items[0]);
    //       }
    //       // Запись данных авторизации в локальное хранилище
    //       MainAPI.setAuthData(data);

    //       // экшн вызывает метод, возвращающий список сотрудников, записывает его в хранилище в sotrList
    //       dispatch(getSotrList())

    //       createOrCheckICD(NAME_INDEXED_DB.nameDB, NAME_INDEXED_DB.nameDS.ICD).then(() => {
    //         dispatch({ type: SET_USER_DATA, payload: data });
    //         dispatch({ type: AUTH_SUCCESS,
    //           payload: {
    //             data,
    //           } });
    //         // Запись флага IndexedDB
    //         dispatch(forwardByFeature(data.items.length > 0 ? data.items[0].prizn : '1'));
    //       })
    //       sessionStorage.clear()
    //       return true;
    //     } catch (err) {
    //       return false
    //     }
    //   })
    //   .catch((error) => {
    //     dispatch({
    //       type: AUTH_ERROR,
    //       payload: {
    //         message: error,
    //       },
    //     })
    //     dispatch({
    //       type: FETCH_USER_DATA_ERROR,
    //     })
    //   })
  };
}

export function logout() {
  return (dispatch) => {
    // IndexedDB.deleteDB(NAME_INDEXED_DB.nameDB).finally(() => {
    //   localStorage.clear();
    //   dispatch(push('/'));
    //   dispatch({
    //     type: LOG_OUT,
    //     payload: null,
    //   })
    // })
  };
}

// export function changeLoadIDB(accessIDB) {
//   return (dispatch) => {
//     dispatch({
//       type: CHANGE_LOAD_IDB,
//       payload: {
//         accessIDB,
//       },
//     })
//   }
// }
