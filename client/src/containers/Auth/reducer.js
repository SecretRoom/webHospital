import { AUTH_SUCCESS, AUTH_ERROR, LOG_OUT } from '../../actions';

export const initialState = {
  isAuthenticated: !!localStorage.getItem('access_token'),
  error: false,
  message: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: false,
        message: '',
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: true,
        message: action.payload.message,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
