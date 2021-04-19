import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store/configureStore';
// import submitOnGlobalEvent from './services/Events/Global/eventSubscriber';
// import Notification from './containers/Notification';

import App from './containers/App';
import { HashRouter } from 'react-router-dom';




// window.addEventListener('online', () => { store.dispatch({ type: 'ONLINE' }); })
// window.addEventListener('offline', () => { store.dispatch({ type: 'OFFLINE' }); })
// window.store = store


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
