export interface signUp {
  userName: string;
  patientFirstName: string;
  patientLastName: string;
  patientEmail: string;
  password: string;
  patientPhoneNumber: string;
  dateOfBirth: string;
}

export const formatSignUp = (data: any): signUp => {
  return {
    userName: data.userName,
    patientFirstName: data.patientFirstName,
    patientLastName: data.patientLastName,
    patientEmail: data.patientEmail,
    password: data.password,
    patientPhoneNumber: data.patientPhoneNumber,
    dateOfBirth: data.dateOfBirth,
  };
};
