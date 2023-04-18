import axios from 'axios';
import qs from 'qs';

const apiUrl = 'https://api-dev.vsseapp.vn/api';

function getToken() {
  return localStorage.getItem('auth');
}

export async function get(path, query) {
  const queryString = qs.stringify(query);
  const res = await axios.get(`${apiUrl + path}?${queryString}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return res.data;
}

export async function post(path, body) {
  const res = await axios.post(apiUrl + path, body, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': `application/json`,
    },
  });
  return res.data;
}

export async function patch(path, body) {
  const res = await axios.patch(apiUrl + path, body, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': `application/json`,
    },
  });
  return res.data;
}

export async function deleteItem(path, body) {
  const res = await axios
    .delete(apiUrl + path, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': `application/json`,
      },
      data: {
        id: body.id,
      },
    })
    .then(response => {
      console.log(response);
    });

  return res;
}
