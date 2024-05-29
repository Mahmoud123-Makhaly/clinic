export interface IProperty {
  address: String;
  id: string;
  name: string;
  price: String;
  size: string;
  type: string;
  image: string;
}
export interface IAppointment {
  id: number;
  startTime: string;
  endTime: string;
  date: Date;
  patientName: string;
  patientId: string;
  doctorName: string;
  doctorId: string;
}
export interface ICity {
  id: string;
  name: string;
  image: string;
}
export interface specializationDoctors {
  id: string;
  doctorEmail: string;
  doctorFirstName: string;
  doctorLastName: string;
  doctorPhoneNumber: string;
  userName: string;
}
export interface IUnit {
  id: number;
  unitNumber: number;
  floor: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  status: string;
  image: string;
}
export interface ISearchDoctor {
  id: string;
  doctorEmail: string;
  doctorFirstName: string;
  doctorLastName: string;
  doctorPhoneNumber: string;
  userName: string;
}
