import routsManager from '../../routes';
import {
  LOG_OUT,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_ERROR,
  SET_USER_DATA,
  CHANGE_PROFILE,
  FETCH_APP_VERSION_REQUEST,
  FETCH_APP_VERSION_SUCCESS,
  FETCH_APP_VERSION_ERROR,
} from '../../actions';

const initialState = {
  currentProfile: null,
  appVersion: '',
  routersSet: null,
  rightsList: [],
  isFetching: false,
  error: false,
  message: '',
};

export function getAListOfUserRights(state, action) {
  const newState = {
    ...state,
    ...action.payload,
    currentProfile: action.payload.items[0],
    routersSet: routsManager.createRoutesSet(action.payload.lstrights),
    isFetching: false,
  };

  if (Object.prototype.hasOwnProperty.call(action.payload, 'lstrights') && action.payload.lstrights) {
    const { lstrights } = action.payload;

    const normalizeLstRights = {};

    lstrights.forEach((right) => {
      normalizeLstRights[right.nmrightsokr] = right;
    });

    newState.rightList = normalizeLstRights;
  }

  return newState;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        message: '',
      };
    case SET_USER_DATA:
    case FETCH_USER_DATA_SUCCESS:
      return getAListOfUserRights(state, action);
    case FETCH_USER_DATA_ERROR:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };
    case CHANGE_PROFILE:
      return {
        ...state,
        currentProfile: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_APP_VERSION_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        message: '',
      };
    case FETCH_APP_VERSION_SUCCESS:
      return {
        ...state,
        appVersion: action.payload,
      }
    case FETCH_APP_VERSION_ERROR:
      return {
        ...state,
        error: true,
        isFetching: false,
        message: action.payload,
      }
    default:
      return state;
  }
}

export function getProfileList(state) {
  return state.userData.items;
}

export function getCurrentProfile(state) {
  return state.userData.currentProfile;
}

export function getProfileSign(state) {
  return state.userData.currentProfile ? state.userData.currentProfile.prizn : null;
}
