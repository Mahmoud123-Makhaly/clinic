import axios from 'axios';
import apiClient, { BASE_URL } from '../utils';

const API_URL = `${BASE_URL}/Doctor/specializationId`;

export const getSpecializationDoctors = async () => {
  const response = await axios.get(API_URL);
  return response.data.value;
};


export const getSpecializationDoctorsById = async (id: number) => {
  const response = await apiClient.get(`${API_URL}/${id}`);
  return response.data.value;
};

export const createSpecializationDoctors = async (data: any) => {
  const response = await apiClient.post(API_URL, data);
  return response.data.value;
};

export const updateSpecializationDoctors = async (id: string, data: any) => {
  const response = await apiClient.put(`${API_URL}/${id}`, data);
  return response.data.value;
};

export const deleteSpecializationDoctors = async (id: string) => {
  const response = await apiClient.delete(`${API_URL}/${id}`);
  return response.data.value;
};
