import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import { registerLocale, setDefaultLocale } from 'em-datepicker';
// import { ReactTableDefaults } from 'react-table-v6'
// import ru from 'date-fns/locale/ru';
// import { configure as configureReactHotkeys } from 'react-hotkeys';
// import * as serviceWorker from './serviceWorker';
// import store, { history } from './store/configureStore';
// import submitOnGlobalEvent from './services/Events/Global/eventSubscriber';
// // import Notification from './containers/Notification';
// import { REACT_TABLE_SETTINGS } from './config'

import App from './containers/App';

// import { getF1HintStatus, getF2HintStatus } from './reducers'

// import './style/normalize.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
// import 'semantic-ui-less/semantic.less';
// import 'em-datepicker/dist/react-datepicker.css';
// // import './style/react-datepicker.css';
// import './style/base.sass';
// import './style/_fonts.sass';
// // Инициализация компонентов с маршрутами
// import './routes/init';
// import 'react-table-v6/react-table.css'

// if (process.env.NODE_ENV !== 'production') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React);
// }

// registerLocale('ru', ru);
// setDefaultLocale('ru');

// submitOnGlobalEvent(store);

// Object.assign(ReactTableDefaults, REACT_TABLE_SETTINGS)

// // конфигурация react-hotkeys
// configureReactHotkeys({
//   ignoreTags: [], // по умолчанию было ['input', 'select', 'textarea']
// })

// window.addEventListener('keydown', (event) => {
//   const { keyCode, which } = event
//   const isKey = (code) => (keyCode || which) === code
//   if (isKey(116)) event.preventDefault()
//   if (isKey(112)) event.preventDefault()
//   if (isKey(113)) event.preventDefault()
//   if (process.env.NODE_ENV === 'production') {
//     if (isKey(123)) event.preventDefault()
//   }
//   // глушение стандартных сочетаний браузера
//   if (
//     event.altKey && event.keyCode === 69 // alt+e
//   ) {
//     event.preventDefault()
//   }
//   if (
//     event.ctrlKey && (
//       event.keyCode === 69 // ctrl+e
//       || event.keyCode === 83 // ctrl+s
//       || event.keyCode === 68 // ctrl+d
//       || event.keyCode === 80 // ctrl+p
//       || event.keyCode === 82 // ctrl+r
//       || event.keyCode === 76 // ctrl+l
//       || event.keyCode === 75 // ctrl+k
//     )
//   ) {
//     event.preventDefault()
//   }
//   // подсказка по F1
//   if (!getF1HintStatus(store.getState()) && event.keyCode === 112) {
//     store.dispatch({ type: 'F1_HINT_SHOW' })
//   } else if (getF1HintStatus(store.getState())) {
//     store.dispatch({ type: 'F1_HINT_HIDE' })
//   }
//   // подсказка по F2
//   if (!getF2HintStatus(store.getState()) && event.keyCode === 113) {
//     store.dispatch({ type: 'F2_HINT_SHOW' })
//   } else if (getF2HintStatus(store.getState())) {
//     store.dispatch({ type: 'F2_HINT_HIDE' })
//   }
// })

// window.addEventListener('keyup', (event) => {
//   // подсказка по F1
//   if (getF1HintStatus(store.getState()) && event.keyCode !== 112) {
//     store.dispatch({ type: 'F1_HINT_HIDE' })
//   }
//   // подсказка по F2
//   if (getF2HintStatus(store.getState()) && event.keyCode !== 113) {
//     store.dispatch({ type: 'F2_HINT_HIDE' })
//   }
// })

// window.addEventListener('mousedown', () => {
//   // подсказка по F1
//   if (getF1HintStatus(store.getState())) {
//     store.dispatch({ type: 'F1_HINT_HIDE' })
//   }
//   // подсказка по F2
//   if (getF2HintStatus(store.getState())) {
//     store.dispatch({ type: 'F2_HINT_HIDE' })
//   }
// })

// window.addEventListener('online', () => { store.dispatch({ type: 'ONLINE' }); })
// window.addEventListener('offline', () => { store.dispatch({ type: 'OFFLINE' }); })
// window.store = store

ReactDOM.render(
  // <Provider store={store}>
  //   <ConnectedRouter history={history}>
      <App />
  //   </ConnectedRouter>
  // </Provider>
  ,
  document.getElementById('root'),
);

// serviceWorker.register();
