import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store/configureStore';
import * as serviceWorker from './serviceWorker';


import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // <Provider store={store}>
  //   <ConnectedRouter history={history}>
  <BrowserRouter>
      <App />
      </BrowserRouter>
  //   </ConnectedRouter>
  // </Provider>
  ,
  document.getElementById('root'),
);

serviceWorker.register();
