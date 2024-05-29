export interface IDoctor {
  id?: string | undefined;
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
