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
import { NOTIFICATION_DELAY } from '../config'
// import Preloader from '../components/Common/Preloader'

import Notification from './Blocks/Notification'

import GlobalError from '../components/Blocks/GlobalError'
import Layout from '../components/Blocks/Layout'
import Spinner from '../components/Common/Spinner'
import { isAuthenticatedS, isFetchingS, messageS } from '../selectors'
import NavBar from '../components/Blocks/NavBar/index'
import { getUserDataA } from './UserService/actions'
import { errorDataS, globalErrorS } from './Global/selectors'

type AppProps = {
  globalError: boolean
  isAuthenticated: boolean
  isFetchingUserData: boolean

  errorData: any

  getUserData: () => void
}

const App = ({
  errorData,
  getUserData,
  globalError,
  isFetchingUserData,
  isAuthenticated,
}: AppProps) => {
  const history = useHistory()

  const _init = () => {
    // Иницилизация маршрутов зарегистрированных страниц
    routeManager.initRoutes()
    if (isAuthenticated) {
      // Получение данных пользователя
      getUserData()
      // getAppVersion()
    } else {
      history.push('/login')
    }
  }

  useEffect(() => {
    _init()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      if (history.location.pathname === '/login') {
        history.push('/schedule')
      } else {
        history.push(history.location.pathname)
      }
    } else {
      history.push('/')
    }
  }, [isAuthenticated])

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
      {isAuthenticated && (
        <NavBar />
      )}

      {globalError && (
        <GlobalError data={errorData} />
      )}

      <Suspense fallback={<Spinner />}>
        <Layout>
          <Switch>
            {routeManager.getRoutes({ isAuthenticated })}
          </Switch>
        </Layout>
      </Suspense>
      <Notification timeout={NOTIFICATION_DELAY} />
    </>
  )
}

export default hot(module)(connect(
  (state): RootStateInterface => ({
    isAuthenticated: isAuthenticatedS(state),
    globalError: globalErrorS(state),
    errorData: errorDataS(state),
    isFetchingUserData: isFetchingS(state),
  }),
  {
    // logout: () => dispatch(logout()),
    getUserData: getUserDataA.request,
    // changeProfile: profile => dispatch(changeProfile(profile)),
    // changeLoadIDB: (/* loading */) => dispatch(changeLoadIDB(true)),
    // getAppVersion: () => dispatch(getAppVersion()),
  },
)(App))
