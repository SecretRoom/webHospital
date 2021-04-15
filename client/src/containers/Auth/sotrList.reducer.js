import {
  FETCH_SOTR_LIST_REQUEST,
  FETCH_SOTR_LIST_SUCCESS,
  FETCH_SOTR_LIST_ERROR,
} from './sotrList.actions'

const initialState = {
  sotrListData: [],
  isFetching: false,
  error: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SOTR_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case FETCH_SOTR_LIST_SUCCESS:
      return {
        ...state,
        sotrListData: action.payload,
        isFetching: false,
        error: false,
      };
    case FETCH_SOTR_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
