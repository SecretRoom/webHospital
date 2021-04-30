/* eslint-disable no-console */
import React, { Suspense, useEffect } from 'react'
import {
  BrowserRouter, Router, Switch, useHistory,
} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import { Dimmer, Loader } from 'semantic-ui-react'
// import { logout, getUserData, changeProfile, changeLoadIDB, getAppVersion } from '../actions'
// import { getCurrentProfile, getF1HintStatus, getF2HintStatus } from '../reducers'
// import { appVersion } from './Auth/selectors'
import routeManager from '../routes'
// import { NOTIFICATION_DELAY } from '../config'
// import Preloader from '../components/Common/Preloader'

// import Notification from './Blocks/Notification'

// import GlobalError from '../components/Blocks/GlobalError'
// import NavBar from '../components/Blocks/NavBar'
import Layout from '../components/Blocks/Layout'
import Spinner from '../components/Common/Spinner'
import { isAuthenticatedS } from '../selectors'

type AppProps = {
  isAuthenticated: boolean
}

const App = ({
  isAuthenticated,
}: AppProps) => {
  const history = useHistory()

  const _init = () => {
    // Иницилизация маршрутов зарегистрированных страниц
    routeManager.initRoutes()
    if (isAuthenticated) {
      // Получение данных пользователя
      // getUserData()
      // getAppVersion()
    } else {
      history.push('/login')
    }
  }

  useEffect(() => {
    _init()
  }, [])

  // const changeProfileHandler = profile => {
  //   changeProfile(profile)
  // }

  // if (isFetchingUserData) {
  //   return (
  //     <Dimmer active inverted>
  //       <Loader size="massive" inverted content="Загрузка" />
  //     </Dimmer>
  //   )
  // }
  return (
    <>
      {/* {routersSet && (
        <NavBar
          navlinks={routersSet}
          profileList={profileList}
          name={`${secondName} ${name}`}
          onLogout={logout}
          onChangeProfile={changeProfileHandler}
          currentProfile={currentProfile}
          isOnline={isOnline}
          isShowF1Hint={isShowF1Hint}
          isShowF2Hint={isShowF2Hint}
          appVersion={appVersion}
        />
      )}

      {globalError && (
        <GlobalError message={message} data={errorData} />
      )}

      <Notification timeout={NOTIFICATION_DELAY} />
    </> */}
      {/* <Suspense fallback={<Spinner />}>
        <Layout> */}
      <Switch>
        {routeManager.getRoutes({ isAuthenticated: false })}
      </Switch>
      {/* </Layout>
      </Suspense> */}
    </>
  )
}

export default hot(module)(connect(
  (state): RootStateInterface => ({
    isAuthenticated: isAuthenticatedS(state),
  }),
  {
    // logout: () => dispatch(logout()),
    // getUserData: history => dispatch(getUserData(history)),
    // changeProfile: profile => dispatch(changeProfile(profile)),
    // changeLoadIDB: (/* loading */) => dispatch(changeLoadIDB(true)),
    // getAppVersion: () => dispatch(getAppVersion()),
  },
)(App))
