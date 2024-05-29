
import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Auth/RegisterPatient`;

export const SignUp = async (data: any) => {
  const response = await apiClient.post(API_URL, data);
  return response.data.value;
};
