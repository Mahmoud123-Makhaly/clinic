import * as infraServices from '../infrastructure/category';
import * as categoryDomain from '../domain/category';

export const getSpecialization = async () => {
  const specializationData = await infraServices.getSpecialization();
  return specializationData.map(categoryDomain.formatCategory);
};

export const getSpecializationById = async (SpecializationId: string) => {
  const specializationData = await infraServices.getSpecializationById(SpecializationId);
  return categoryDomain.formatCategory(specializationData);
};

export const createSpecialization = async (SpecializationData: categoryDomain.Category) => {
  const specializationData = await infraServices.createSpecialization(SpecializationData);
  return categoryDomain.formatCategory(specializationData);
};

export const updateSpecialization = async (specializationId: string, specializationIdData: categoryDomain.Category) => {
  const updatedSpecializationData = await infraServices.updateSpecialization(specializationId, specializationIdData);
  return categoryDomain.formatCategory(updatedSpecializationData);
};

export const deleteSpecialization = async (SpecializationId: string) => {
  await infraServices.deleteSpecialization(SpecializationId);
};
