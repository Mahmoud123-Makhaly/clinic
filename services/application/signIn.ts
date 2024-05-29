
import axios from 'axios';
import { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Auth/Login`;

export const SignIn = async (data:any) => {
  const response = await axios.post(API_URL, data);
  const id = response.data.value["id"];
  localStorage.setItem('userId', id);
  const token = response.data.value["token"];
  if (typeof token === 'object') {
    JSON.stringify(localStorage.setItem('token', token))
  } else {
    localStorage.setItem('token', token);
  }
  return token;
};
