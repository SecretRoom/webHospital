/* eslint-disable global-require */
/* eslint-disable import/no-named-as-default-member, import/no-extraneous-dependencies */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter } from 'react-router-dom'
import store, { history } from './store/configureStore'
import * as serviceWorker from './serviceWorker'

import App from './containers/App.tsx'

import submitOnGlobalEvent from './services/Events/Global/eventSubscriber';

import './style/normalize.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'semantic-ui-less/semantic.less'
// import './style/react-datepicker.css'
import './style/base.sass'

import './routes/init'
import 'semantic-ui-css/semantic.min.css'

submitOnGlobalEvent(store)

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React)
}
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register()
