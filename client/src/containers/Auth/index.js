import { connect } from 'react-redux';
import routsManager from '../../routes/routes'
import {
  auth, logout, getUserData, changeProfile,
} from '../../actions';

import { getAppVersion } from './userService.actions'

import LoginPage from '../../modules/AuthPage/index.tsx';

const LoginContainer = LoginPage

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

// export default LoginContainer
