export interface Doctor {
  id: string;
  doctorEmail: string;
  doctorFirstName: string;
  doctorLastName: string;
  doctorPhoneNumber: string;
  userName: string;
  specialization: {
    id: 1;
    specializationName: string;
  };
}

export const formatDoctor = (doctorData: any): Doctor => {
  return {
    id: doctorData?.id,
    doctorEmail: doctorData?.doctorEmail,
    doctorFirstName: doctorData?.doctorFirstName,
    doctorLastName: doctorData?.doctorLastName,
    doctorPhoneNumber: doctorData?.doctorPhoneNumber,
    userName: doctorData?.userName,
    specialization: {
      id: doctorData?.specialization.id,
      specializationName: doctorData?.specialization?.specializationName,
    },
  };
};
