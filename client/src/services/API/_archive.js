// import axios from '../axios.config';
// // ТЕСТОВЫЕ МЕТОДЫ

// // Загрузка изображения для обучения на сервер
// export function uploadFile(img) {
//   const formData = new FormData();

//   formData.append('file', img);
//   formData.append('token', 'UafsldjkHJ3hfafZah3984');

//   return axios.post('http://192.168.0.40:3010/uploadfile', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
// }

// // Отправка координат выбранныйх участков на рентгене для обучения нейронки
// export function sendCoords(data) {
//   return axios.post(
//     'http://192.168.0.40:3010/learnfile',
//     JSON.stringify({
//       token: 'UafsldjkHJ3hfafZah3984',
//       ...data,
//     }),
//   );
// }

// // Отправка файла для анализа
// export function uploadFileForAnalysis(img, target, token) {
//   const formData = new FormData();

//   formData.append('file', img);
//   formData.append('token', token);

//   return axios.post(`${target}/processfile`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
// }

// // Получение результата проанализированного изображения(действие перенесено на сервер)
// // getImageProcessingResult(imageName) {
// //   return axios.post(`http://192.168.0.40:3010/getfile/${imageName}`);
// // }
