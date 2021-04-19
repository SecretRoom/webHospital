import React, { Suspense, useEffect, createContext } from 'react'
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'
import routeManager from '../routes'
// import Preloader from '../components/Common/Preloader';

// import Notification from './Blocks/Notification';

// import GlobalError from '../components/Blocks/GlobalError';
import TestPage from '../modules/TestPage';
// import NavBar from '../components/Blocks/NavBar';
// import Layout from '../components/Blocks/Layout';
// import Spinner from '../components/Common/Spinner';

import { Loader } from 'semantic-ui-react';

function noop() {}

const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
})

/**
 * @typedef {component} component
 * @category MODULES
 *
 * @class App
 * @extends {PureComponent}
 *
 */
const App = () => {

  const history = useHistory()

  const _init = () => {
    // Иницилизация маршрутов зарегистрированных страниц
    routeManager.initRoutes()
    if (isAuthenticated) {
      // Получение данных пользователя
      // getUserData()
      // getAppVersion()
    } else {
      // history.push('/login');
    }
  }

  useEffect(()=>{
    console.log("🚀 ~ file: App.jsx ~ line 48 ~ App ~ history", history)
  })

  useEffect(() => {
    _init()
  }, [])


  const {token, login, logout, userId, ready} = {}
  const isAuthenticated = !!token

  // if (!ready) {
  //   return <Loader />
  // }

  const routes = routeManager.getRoutes(false)

  return (
    <Router>
      {/* { isAuthenticated && <Navbar /> } */}
      <div className="container">
        {routes}
      </div>
    </Router>
  )
}

export default App
