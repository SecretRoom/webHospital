import { push } from 'connected-react-router';
import API from '../../services/API/auth.api';
// import objectToLocalStorage from '../../utils/localStorageUtils';
import { getSotrList } from './sotrList.actions'

export const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_ERROR = 'FETCH_USER_DATA_ERROR';

export const FETCH_APP_VERSION_REQUEST = 'FETCH_APP_VERSION_REQUEST';
export const FETCH_APP_VERSION_SUCCESS = 'FETCH_APP_VERSION_SUCCESS';
export const FETCH_APP_VERSION_ERROR = 'FETCH_APP_VERSION_ERROR';

export const CHANGE_PROFILE = 'CHANGE_PROFILE';

export function getUserData() {
  function fetchProfileListSuccess(data) {
    return {
      type: FETCH_USER_DATA_SUCCESS,
      payload: data,
    };
  }

  function errorProfileList({ message }) {
    return {
      type: FETCH_USER_DATA_ERROR,
      payload: {
        isFetching: false,
        error: true,
        message,
      },
    };
  }
  return (dispatch) => {
    dispatch({ type: FETCH_USER_DATA_REQUEST });
    return API.getProfileList()
      .then((data) => {
        if (data.items.length > 0) {
          // objectToLocalStorage(data.items[0]);
        }
        dispatch(fetchProfileListSuccess(data));
        dispatch(getSotrList())
        if (localStorage.getItem('access_token')) {
          if (window.location.pathname === '/login') {
            dispatch(push('/reception'));
          } else {
            dispatch(push(window.location.pathname));
          }
        } else {
          dispatch(push('/login'));
        }
      })
      .catch((error) => dispatch(errorProfileList(error)));
  };
}

export function getAppVersion() {
  function fetchAppVersionSuccess(data) {
    return {
      type: FETCH_APP_VERSION_SUCCESS,
      payload: data,
    };
  }

  function errorAppVersion({ message }) {
    return {
      type: FETCH_APP_VERSION_ERROR,
      payload: {
        isFetching: false,
        error: true,
        message,
      },
    };
  }

  return (dispatch) => {
    dispatch({ type: FETCH_APP_VERSION_REQUEST });
    return API.getAppVersion()
      .then((data) => {
        dispatch(fetchAppVersionSuccess(data));
      })
      .catch((error) => dispatch(errorAppVersion(error)));
  };
}

export function changeProfile(profile) {
  return (dispatch) => {
    // Promise.resolve().then(() => {
    //   objectToLocalStorage(profile);
    //   dispatch({
    //     type: CHANGE_PROFILE,
    //     payload: profile,
    //   });
    // });
  };
}
