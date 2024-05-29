import * as infraServices from '../infrastructure/specializationDoctors';
import * as SpecializationDoctorsDomain from '../domain/doctor';

export const getSpecializationDoctors = async () => {
  const specializationData = await infraServices.getSpecializationDoctors();
  return specializationData.map(SpecializationDoctorsDomain.formatDoctor);
};

export const getSpecializationDoctorsById = async (id: number) => {
  const specializationData = await infraServices.getSpecializationDoctorsById(id);
 
  return specializationData.map(SpecializationDoctorsDomain.formatDoctor);
};


export const createSpecializationDoctors = async (data: SpecializationDoctorsDomain.Doctor) => {
  const specializationData = await infraServices.createSpecializationDoctors(data);
  return SpecializationDoctorsDomain.formatDoctor(specializationData);
};

export const updateSpecializationDoctors = async (
  specializationId: string,
  specializationIdData: SpecializationDoctorsDomain.Doctor,
) => {
  const updatedSpecializationData = await infraServices.updateSpecializationDoctors(
    specializationId,
    specializationIdData,
  );
  return SpecializationDoctorsDomain.formatDoctor(updatedSpecializationData);
};

export const deleteSpecializationDoctors = async (SpecializationId: string) => {
  await infraServices.deleteSpecializationDoctors(SpecializationId);
};
