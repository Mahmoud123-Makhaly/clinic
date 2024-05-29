import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Auth/Login`;

export const SignIn = async (data: any) => {
  const response = await apiClient.post(API_URL, data);
  const token = response.data.value;
  const id = response.data.value.id;

  localStorage.setItem('token', token);
  localStorage.setItem('id', id);
  return token;
};
