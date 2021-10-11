import axios from 'axios';
import { ROOT_URI, API_TIMEOUT } from './constants';

const instance = axios.create({
  baseURL: ROOT_URI,
  timeout: API_TIMEOUT,
});

const sendRequest = ({ url, method, params, data }) =>
  instance({
    url,
    method,
    params,
    data,
    headers: {
      Authorization: localStorage.getItem('token') || '',
    },
  })
    .then(response => {
      if (!response.data.error || response.data.error === 0) {
        return handleSuccess(response);
      }
      return handleError(response);
    })
    .catch(error => handleError(error));

export const get = ({ url, params }) =>
  sendRequest({ url, params, method: 'GET' });

export const post = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'POST' });

export const put = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'PUT' });

export const deleteData = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'DELETE' });

const handleSuccess = respond => Promise.resolve(respond);

const handleError = error => {
  if (error.response) {
    return Promise.reject(
      error && error.response && error.response.data.result,
    );
  }

  return Promise.reject(error);
};
