import { connect } from 'react-redux';
import routsManager from '../../routes'
import {
  auth, logout, getUserData, changeProfile,
} from '../../actions';

import { getAppVersion } from './userService.actions'

import LoginPage from '../../modules/AuthPage/index.tsx';

const LoginContainer = connect(
  (state) => ({
    isFetching: state.userData.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    // date: state.userData.date,
    // name: state.userData.nmsotr,
    // secondName: state.userData.famsotr,
    // patronymic: state.userData.otsotr,
    // currentProfile: getCurrentProfile(state),
    // sign: getProfileSign(state),
    // rightsList: getAListOfUserRights(state)
  }),
  (dispatch) => ({
    auth: (authData, history) => dispatch(auth(authData, history)),
    logout: () => dispatch(logout()),
    getUserData: () => dispatch(getUserData()),
    changeProfile: (profile) => dispatch(changeProfile(profile)),
    getAppVersion: () => dispatch(getAppVersion()),
  }),
)(LoginPage);

routsManager.registerRoute({
  title: '',
  path: '/login',
  component: LoginContainer,
  rights: {
    show: '',
    edit: '',
  },
  profile: 'ALL',
  showNavLink: false,
  isPrivate: false,
  exact: true,
})

export default LoginContainer
