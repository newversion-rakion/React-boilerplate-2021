import axios from 'axios';
import qs from 'qs';

export const apiUrl = 'https://api-dev.vsseapp.vn/api';
const tokenString =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50IjpbIkxpc3QiLCJDcmVhdGUiLCJVcGRhdGUiLCJEZWxldGUiXSwiUm9sZSI6WyJMaXN0IiwiQ3JlYXRlIiwiVXBkYXRlIiwiRGVsZXRlIl0sImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiZDU3MDY2NTQtNDIzYS00ZjZmLWFjYzMtMzI5ZmJmOTAxZDZkIiwiZXhwIjoxNjgxODg3NzYzLCJpc3MiOiJJbnZlbnRvcnlBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkludmV0b3J5U2VydmljZVBvc3RtYW5DMWllbnQifQ.bzrleNZex47ufF2ZHPzohoAkdZxi0Thk1pv93ETCin0';

export function getToken() {
  return localStorage.getItem('auth') || tokenString;
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
