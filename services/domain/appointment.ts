export interface appointmentsList {
  id: number;
  startTime: string;
  endTime: string;
  date: Date;
  patientName: string;
  patientId: string;
  doctorName: string;
  doctorId: string;
}
export interface addAppointment {
  startTime: string;
  endTime: string;
  date: string;
  patientId: string;
  doctorId: string;
}

export const formatAppointmentsList = (data: any): appointmentsList => {
  return {
    id: data.id,
    startTime: data.startTime,
    endTime: data.endTime,
    date: data.date,
    patientName: data.patientName,
    patientId: data.patientId,
    doctorName: data.doctorName,
    doctorId: data.doctorId,
  };
};
export const formatAddAppointment = (data: any): addAppointment => {
  return {
    startTime: data?.startTime,
    endTime: data?.endTime,
    date: data?.date,
    patientId: data?.patientId,
    doctorId: data?.doctorId,
  };
};
