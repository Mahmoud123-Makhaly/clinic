import * as infraServices from '../infrastructure/appointment';
import * as appointmentDomain from '../domain/appointment';

export const getAppointment = async () => {
  const AppointmentData = await infraServices.getAppointment();
  return AppointmentData.map(appointmentDomain.formatAppointmentsList);
};
export const getAppointmentForPatient = async () => {
  const AppointmentData = await infraServices.getAppointmentForPatient();
  return AppointmentData.map(appointmentDomain.formatAppointmentsList);
};
export const getAppointmentById = async (AppointmentId: number) => {
  const AppointmentData = await infraServices.getAppointmentById(AppointmentId);
  return appointmentDomain.formatAppointmentsList(AppointmentData);
};

export const createAppointment = async (data: appointmentDomain.addAppointment) => {
  const AppointmentData = await infraServices.createAppointment(data);
  return appointmentDomain.formatAddAppointment(AppointmentData);
};

export const updateAppointment = async (AppointmentId: number, AppointmentIdData: appointmentDomain.addAppointment) => {
  const updatedAppointmentData = await infraServices.updateAppointment(AppointmentId, AppointmentIdData);
  return appointmentDomain.formatAddAppointment(updatedAppointmentData);
};

export const deleteAppointment = async (AppointmentId: number) => {
  await infraServices.deleteAppointment(AppointmentId);
};
