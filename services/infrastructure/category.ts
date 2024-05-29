import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Specialization`;

export const getSpecialization = async () => {
  const response = await apiClient.get(API_URL);
  return response.data.value;
};

export const getSpecializationById = async (specializationId: string) => {
  const response = await apiClient.get(`${API_URL}/${specializationId}`);
  return response.data.value;
};

export const createSpecialization = async (specializationData: any) => {
  const response = await apiClient.post(API_URL, specializationData);
  return response.data.value;
};

export const updateSpecialization = async (specializationId: string, specializationData: any) => {
  const response = await apiClient.put(`${API_URL}/${specializationId}`, specializationData);
  return response.data.value;
};

export const deleteSpecialization = async (specializationId: string) => {
  const response = await apiClient.delete(`${API_URL}/${specializationId}`);
  return response.data.value;
};
