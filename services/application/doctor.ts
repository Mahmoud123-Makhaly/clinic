import * as infraServices from '../infrastructure/doctor';
import * as doctorDomain from '../domain/doctor';

export const getDoctor = async () => {
  const DoctorData = await infraServices.getDoctor();
  return DoctorData.map(doctorDomain.formatDoctor);
};
export const searchDoctor = async (keyword: string) => {
  const DoctorData = await infraServices.searchDoctor(keyword);
  return DoctorData.map(doctorDomain.formatDoctor);
};

export const getDoctorById = async (DoctorId: string) => {
  const DoctorData = await infraServices.getDoctorById(DoctorId);
  return doctorDomain.formatDoctor(DoctorData);
};

export const createDoctor = async (doctorData: doctorDomain.Doctor) => {
  const DoctorData = await infraServices.createDoctor(doctorData);
  return doctorDomain.formatDoctor(DoctorData);
};

export const updateDoctor = async (DoctorId: string, DoctorData: doctorDomain.Doctor) => {
  const updatedDoctorData = await infraServices.updateDoctor(DoctorId, DoctorId);
  return doctorDomain.formatDoctor(updatedDoctorData);
};

export const deleteDoctor = async (DoctorId: string) => {
  await infraServices.deleteDoctor(DoctorId);
};
