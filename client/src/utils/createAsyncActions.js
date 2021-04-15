// Функция создающас асинхронный экшн
export default function createAsyncAction(action, fetch) {
  return (data, ...args) => (dispatch) => {
    dispatch({
      type: `${action}_REQUEST`,
      ...args,
    });
    return fetch(data, ...args)
      .then((res) => {
        dispatch({
          type: `${action}_SUCCESS`,
          ...args,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${action}_ERROR`,
          ...args,
          payload: {
            error,
            message: error.message,
          },
        });
      });
  };
}
