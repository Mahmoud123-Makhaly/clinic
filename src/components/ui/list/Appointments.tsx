'use client';
import React, { useEffect, useState } from 'react';
import { CardMaker } from '../../common/index';
import { Col, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { deleteAppointment, getAppointmentForPatient } from '../../../../services/application/appointment';
import { IAppointment } from './type';
import { Link } from '../../../navigation';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const getAppointment = async () => {
    try {
      const data = await getAppointmentForPatient();
      setAppointments(data);
    } catch (error) {}
  };
  useEffect(() => {
    getAppointment();
  }, []);
  console.log('appointments', appointments);
  //const dates = ['12/2/2024', '12/2/2024', '12/2/2024', '12/2/2024', '12/2/2024', '12/2/2024', '12/2/2024'];
  const handleRemove = async (id: number) => {
    toast.success('Deleted Successfully');
    await deleteAppointment(id);
    getAppointment();
  };
  return (
    <div className="paddingt-140">
      <Row>
        {appointments.map((item: IAppointment, index) => (
          <Col md={4} key={index}>
            <Link href={`/appointment/${item.id}`}>
              {' '}
              <div className="rounded border flex-between   p-4 bg-white shadow">
                <div className="gap-3  d-flex align-items-center">
                  <i className="fa-solid fa-calendar-check fs-3 text-dark-blue"></i>
                  <h4 className="m-0 text-primary">{String(item.date)}</h4>
                </div>
                <i className="pointer fa-solid fa-xmark" onClick={() => handleRemove(item.id)}></i>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Appointments;
