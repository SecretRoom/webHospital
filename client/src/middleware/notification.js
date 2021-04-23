/* eslint-disable import/prefer-default-export */
import uuid from 'uuid/v4';
import * as actionsTypes from '../actions';

export const notification = (store) => (next) => (action) => {
// if (!isSubmit) {
//   isSubmit = submit(store, stop);
// }

  // console.log(isSubmit, stopNext);

  // eslint-disable-next-line no-shadow
  // function getNotificationType(action) {
  //   if (action.type.includes('SHOW')) {
  //     return actionsTypes.NOTIFICATION_SHOW;
  //   }
  //   if (action.type.includes('SUCCESS')) {
  //     return actionsTypes.NOTIFICATION_SUCCESS;
  //   }
  //   if (action.type.includes('ERROR')) {
  //     return actionsTypes.NOTIFICATION_ERROR;
  //   }
  //   if (action.type.includes('WARNING')) {
  //     return actionsTypes.NOTIFICATION_WARNING;
  //   }
  //   if (action.type.includes('CONFIRM')) {
  //     return actionsTypes.NOTIFICATION_CONFIRM;
  //   }
  //   if (action.type.includes('INFO')) {
  //     return actionsTypes.NOTIFICATION_INFO;
  //   }
  //   return actionsTypes.NOTIFICATION_INFO;
  // }

  if (action.type === 'SHOW_MESSAGE') {
  // console.log('диспатч оповещения', action);
    store.dispatch({
      type: 'NOTIFICATION',
      payload: {
        id: uuid(),
        type: actionsTypes.NOTIFICATION_SUCCESS,
        text: action.payload.message,
        confirm: action.payload.confirm,
        cancel: action.payload.cancel,
      },
    });
  }
  if (action.type === 'SHOW_WARNING') {
    // console.log('диспатч оповещения', action);
    store.dispatch({
      type: 'NOTIFICATION',
      payload: {
        id: uuid(),
        type: actionsTypes.NOTIFICATION_WARNING,
        text: action.payload.message,
        confirm: action.payload.confirm,
        cancel: action.payload.cancel,
      },
    });
  }

  // if (!stopNext) {
  next(action);
};
