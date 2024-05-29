export interface specializationDoctors {
  id: string;
  doctorEmail: string;
  doctorFirstName: string;
  doctorLastName: string;
  doctorPhoneNumber: string;
  userName: string;
}

export const formatSpecializationDoctors = (specializationData: any): specializationDoctors => {
  return {
    id: specializationData.id,
    doctorEmail: specializationData.doctorEmail,
    doctorFirstName: specializationData.doctorFirstName,
    doctorLastName: specializationData.doctorLastName,
    doctorPhoneNumber: specializationData.doctorPhoneNumber,
    userName: specializationData.userName,
  };
};
