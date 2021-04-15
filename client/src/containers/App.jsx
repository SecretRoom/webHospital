import React, { Suspense, useEffect } from 'react'
import { Switch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Dimmer, Loader } from 'semantic-ui-react'
import { logout, getUserData, changeProfile, changeLoadIDB, getAppVersion } from '../actions'
import { getCurrentProfile } from '../reducers'
import { appVersion } from './Auth/selectors'
import routeManager from '../routes'
import { NOTIFICATION_DELAY } from '../config'
// import Preloader from '../components/Common/Preloader';

// import Notification from './Blocks/Notification';

// import GlobalError from '../components/Blocks/GlobalError';
// import NavBar from '../components/Blocks/NavBar';
// import Layout from '../components/Blocks/Layout';
// import Spinner from '../components/Common/Spinner';

/**
 * @typedef {component} component
 * @category MODULES
 *
 * @class App
 * @extends {PureComponent}
 *
 */
const App = ({
  isAuthenticated,
  isFetchingUserData,
  routersSet,
  profileList,
  secondName,
  name,
  currentProfile,
  isOnline,
  globalError,
  message,
  errorData,
  changeProfile,
  logout,
  getUserData,
  isShowF1Hint,
  isShowF2Hint,
  getAppVersion,
  appVersion,
}) => {
  const history = useHistory()

  const _init = () => {
    // Иницилизация маршрутов зарегистрированных страниц
    routeManager.initRoutes()
    if (isAuthenticated) {
      // Получение данных пользователя
      getUserData()
      getAppVersion()
    } else {
      history.push('/login');
    }
  }

  useEffect(() => {
    _init()
  }, [])

  const changeProfileHandler = profile => {
    changeProfile(profile)
  }

  if (isFetchingUserData) {
    return (
      <Dimmer active inverted>
        <Loader size="massive" inverted content="Загрузка" />
      </Dimmer>
    )
  }
  // return (
  //   <>
      //  {routersSet && (
        // <NavBar
      //     navlinks={routersSet}
      //     profileList={profileList}
      //     name={`${secondName} ${name}`}
      //     onLogout={logout}
      //     onChangeProfile={changeProfileHandler}
      //     currentProfile={currentProfile}
      //     isOnline={isOnline}
      //     isShowF1Hint={isShowF1Hint}
      //     isShowF2Hint={isShowF2Hint}
      //     appVersion={appVersion}
      //   />
      // )}

      // {globalError && (
      //   <GlobalError message={message} data={errorData} />
      // )}

      // <Suspense fallback={<Spinner />}>
      //   <Layout>
      //     <Switch>
      //       {routeManager.getRoutes({ isAuthenticated })}
      //     </Switch>
      //   </Layout>
      // </Suspense>
      // <Notification timeout={NOTIFICATION_DELAY} />
  //   </>
  // )
}

App.propTypes = {
  isOnline: PropTypes.bool,
  globalError: PropTypes.bool,
  errorData: PropTypes.bool,
  isFetchingUserData: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  isShowF1Hint: PropTypes.bool,
  isShowF2Hint: PropTypes.bool,
  routersSet: PropTypes.array,
  profileList: PropTypes.array,
  name: PropTypes.string,
  secondName: PropTypes.string,
  message: PropTypes.string,
  currentProfile: PropTypes.shape(),
  logout: PropTypes.func,
  getUserData: PropTypes.func,
  changeProfile: PropTypes.func,
  getAppVersion: PropTypes.func,
  appVersion: PropTypes.string,
}

App.defaultProps = {
  isOnline: false,
  globalError: false,
  errorData: false,
  isFetchingUserData: false,
  isAuthenticated: false,
  isShowF1Hint: false,
  isShowF2Hint: false,
  routersSet: [],
  profileList: [],
  name: '',
  secondName: '',
  message: '',
  currentProfile: {},
  logout: () => {},
  getUserData: () => {},
  changeProfile: () => {},
  getAppVersion: () => {},
  appVersion: '',
}

export default connect(
  state => ({
    isOnline: state.global.isOnline,
    globalError: state.global.globalError,
    errorData: state.global.errorData,
    isFetchingUserData: state.userData.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    routersSet: state.userData.routersSet,
    profileList: state.userData.items,
    name: state.userData.nmsotr,
    secondName: state.userData.famsotr,
    message: state.userData.message,
    currentProfile: getCurrentProfile(state),
    // isShowF1Hint: getF1HintStatus(state),
    // isShowF2Hint: getF2HintStatus(state),
    appVersion: appVersion(state),
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    getUserData: history => dispatch(getUserData(history)),
    changeProfile: profile => dispatch(changeProfile(profile)),
    changeLoadIDB: (/* loading */) => dispatch(changeLoadIDB(true)),
    getAppVersion: () => dispatch(getAppVersion()),
  }),
)(App)
