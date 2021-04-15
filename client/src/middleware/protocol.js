// /* eslint-disable max-len */
// /* eslint-disable import/prefer-default-export */
// import { push } from 'connected-react-router';
// import { fetchListOfProtocols, chooseExamination } from '../actions';

// export const protocol = (store) => (next) => (action) => {
//   if (action.type === 'COPY_PROTOCOL_SUCCESS') {
//     store.dispatch(fetchListOfProtocols(localStorage.getItem('cdpac')))
//       .then(() => {
//         if (!action.payload.exam) return next(action);
//         const newExamination = action.payload.exam.cdent;
//         store.dispatch(chooseExamination(newExamination));
//         store.dispatch(push(`/patients/${localStorage.getItem('cdpac')}/protocols/${newExamination}`));
//         return newExamination;
//       });
//   }

//   if (action.type === 'FETCH_PROTOCOL_LIST_SUCCESS') {
//     const newAction = action;

//     if (action.payload.items.length === 0) {
//       store.dispatch(chooseExamination(''));
//       newAction.payload = action.payload.items;
//       newAction.message = 'Протоколов нет, создайте новый протокол';
//       return next(newAction);
//     }

//     // Сортировка списка осмотров
//     const listOfProtocols = action.payload.items.sort((prevItem, nextItem) => {
//       function formDate(date) {
//         return `${date.datreg.slice(6, 10)}-${date.datreg.slice(3, 5)}-${date.datreg.slice(
//           0,
//           2,
//         )}T${date.datreg.slice(11)}`;
//       }
//       const datePrev = formDate(prevItem);
//       const dateNext = formDate(nextItem);
//       return new Date(dateNext) - new Date(datePrev);
//     });
//     newAction.payload = listOfProtocols;

//     // Выбор последнего созданного осмотра из списка и редирект на него для отображения при первом переходе
//     if (!store.getState().patient.protocols.currentProtocol) {
//       store.dispatch(chooseExamination(listOfProtocols[0].cdent));
//       store.dispatch(
//         push(`/patients/${localStorage.getItem('cdpac')}/protocols/${listOfProtocols[0].cdent}`),
//       );
//     }
//     return next(newAction);
//   }

//   return next(action);
// };
