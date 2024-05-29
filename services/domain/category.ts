export interface Category {
  id: string;
  specializationName: string;
}

export const formatCategory= (specializationData: any): Category => {
  return {
    id: specializationData.id,
    specializationName: specializationData.specializationName,
  };
};
