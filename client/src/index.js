import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import * as serviceWorker from './serviceWorker';
import store, { history } from './store/configureStore';
// import submitOnGlobalEvent from './services/Events/Global/eventSubscriber';
// import Notification from './containers/Notification';

import App from './containers/App';

// import './style/normalize.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
// import 'semantic-ui-less/semantic.less';
// import 'em-datepicker/dist/react-datepicker.css';
// import './style/react-datepicker.css';
// import './style/base.sass';
// import './style/_fonts.sass';
// Инициализация компонентов с маршрутами
import './routes/init';
// import 'react-table-v6/react-table.css'

// if (process.env.NODE_ENV !== 'production') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React);
// }

// submitOnGlobalEvent(store);



window.addEventListener('online', () => { store.dispatch({ type: 'ONLINE' }); })
window.addEventListener('offline', () => { store.dispatch({ type: 'OFFLINE' }); })
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
