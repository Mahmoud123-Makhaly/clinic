import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Appointment`;

export const getAppointment = async () => {
  const response = await apiClient.get(API_URL);
  return response.data.value;
};

export const getAppointmentForPatient = async () => {
  const response = await apiClient.get(`${API_URL}/Patient`);
  return response.data.value;
};

export const getAppointmentById = async (id: number) => {
  const response = await apiClient.get(`${API_URL}/${id}`);
  return response.data.value;
};

export const createAppointment = async (data: any) => {
  const response = await apiClient.post(API_URL, data);
  return response.data.value;
};

export const updateAppointment = async (id: number, data: any) => {
  const response = await apiClient.put(`${API_URL}/${id}`, data);
  return response.data.value;
};

export const deleteAppointment = async (id: number) => {
  const response = await apiClient.delete(`${API_URL}/${id}`);
  return response.data.value;
};
