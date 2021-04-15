/* eslint-disable max-len */
import axios from 'axios';

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function updateToken(request) {
  const refreshToken = localStorage.getItem('refresh_token');
  const refresh = axios.create({
    headers: {
      Authorization: `Bearer ${refreshToken}`,
      'Content-Type': 'application/json',
    },
  });

  return refresh
    .post('/auth/refresh')
    .then((res) => {
      localStorage.setItem('origin', Date.now());
      localStorage.setItem('access_token', res.data.access_token);
      localStorage.setItem('refresh_token', res.data.refresh_token);
      localStorage.setItem('expires_at', res.data.expires_at);

      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'access_token',
      )}`;

      request.headers = {
        Authorization: `Bearer ${res.data.access_token}`,
        'Content-Type': 'application/json',
      };
      return request;
    })
    .catch((err) => {
      localStorage.clear();
      return err;
    })
    .finally(() => window.location.reload());
}

axios.interceptors.request.use(
  (request) => {
    if (!localStorage.getItem('origin')) return request;

    const origin = localStorage.getItem('origin');
    const expiresAt = localStorage.getItem('expires_at');
    const accessToken = localStorage.getItem('access_token');

    if (Math.floor((Date.now() - origin) / 1000) >= expiresAt - 60) {
      return updateToken(request).then(() => {
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
          'access_token',
        )}`;
        return request;
      });
    }
    request.headers.Authorization = `Bearer ${accessToken}`;
    return request;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response.data.sub_status;
    if ((status === 2) || (status === 42)) {
      updateToken(error.response.config);
      return Promise.reject(error.response.config);
    }
    return Promise.reject(error);
  },
);

export default axios;
