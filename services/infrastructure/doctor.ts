 import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Doctor`;

 

export const getDoctor = async () => {
  const response = await apiClient.get(API_URL);
  return response.data.value;
};

export const getDoctorById = async (DoctorId: string) => {
  const response = await apiClient.get(`${API_URL}/${DoctorId}`);
  return response.data.value;
};

export const createDoctor = async (DoctorData: any) => {
  const response = await apiClient.post(API_URL, DoctorData);
  return response.data.value;
};
export const searchDoctor = async (keyword: string) => {
  const response = await apiClient.get(`${API_URL}/search/${keyword}`);
  return response.data.value;
};
export const updateDoctor = async (DoctorId: string, DoctorData: any) => {
  const response = await apiClient.put(`${API_URL}/${DoctorId}`, DoctorData);
  return response.data.value;
};

export const deleteDoctor = async (DoctorId: string) => {
  const response = await apiClient.delete(`${API_URL}/${DoctorId}`);
  return response.data.value;
};
