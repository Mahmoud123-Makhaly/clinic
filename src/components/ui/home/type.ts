export interface ICategory {
  id: number;
  specializationName: string;
}
export interface IDoctor {
  id: string;
  doctorEmail: string;
  doctorFirstName: string;
  doctorLastName: string;
  doctorPhoneNumber: string;
  userName: string;
}

export interface IProject {
  name: string;
  description: string;
  image: string;
  id: string;
}
