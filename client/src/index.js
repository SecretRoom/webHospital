/* eslint-disable global-require */
/* eslint-disable import/no-named-as-default-member, import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter } from 'react-router-dom'
// import store, { history } from './store/configureStore'
import * as serviceWorker from './serviceWorker'

import App from './containers/App'

import './style/normalize.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import 'semantic-ui-less/semantic.less'
// import './style/react-datepicker.css'
import './style/base.sass'
import './style/_fonts.sass'

import './routes/init'
import 'semantic-ui-css/semantic.min.css'

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React)
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
    // <Provider store={store}>
    //   <ConnectedRouter history={history}>
    //   </ConnectedRouter>
    // </Provider>

  document.getElementById('root'),
)

serviceWorker.register()
