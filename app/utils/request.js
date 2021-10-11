import axios from 'axios';
import { store } from 'react-notifications-component';
import { ROOT_URI, API_TIMEOUT } from './constants';

const instance = axios.create({
  baseURL: ROOT_URI,
  timeout: API_TIMEOUT,
});

const sendRequest = ({ url, method, params, data, apiName = '' }) =>
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
        return handleSuccess(response, apiName);
      }
      return handleError(response, apiName);
    })
    .catch(error => handleError(error, apiName));

export const get = ({ url, params, apiName }) =>
  sendRequest({ url, params, method: 'GET', apiName });

export const post = ({ url, params, data, apiName }) =>
  sendRequest({ url, params, data, method: 'POST', apiName });

export const put = ({ url, params, data, apiName }) =>
  sendRequest({ url, params, data, method: 'PUT', apiName });

export const deleteData = ({ url, params, data, apiName }) =>
  sendRequest({ url, params, data, method: 'DELETE', apiName });

const handleSuccess = (respond, apiName) => {
  if (apiName && process.env.NODE_ENV === 'development') {
    const message = `${apiName} is succeed`;

    store.addNotification({
      message,
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 2000,
      },
    });
  }
  return Promise.resolve(respond);
};

const handleError = (error, apiName) => {
  if (error.response) {
    return Promise.reject(
      error && error.response && error.response.data.result,
    );
  }

  return Promise.reject(error);
};
