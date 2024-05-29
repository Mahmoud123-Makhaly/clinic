'use client';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Calendar } from 'primereact/calendar';

import { ButtonMaker, ImageMaker } from '../../../common/index';
import { getDoctorById } from '../../../../../services/application/doctor';
import { IDoctor } from './type';
import { createAppointment } from '../../../../../services/application/appointment';
import { toast } from 'react-toastify';

const DoctorDetails = ({ id }: { id: string }) => {
  const [details, setDetails] = useState<IDoctor>();
  const [startTime, setStartTime] = useState<any>(null);
  const [date, setDate] = useState<any>();
  const [endTime, setEndTime] = useState<any>(null);

  useEffect(() => {
    const getDoctorDetails = async () => {
      const data = await getDoctorById(id);
      setDetails(data);
    };

    getDoctorDetails();
  }, []);
  function convertDate(time: string) {
    const date = new Date(time);

    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedHours = hours % 12 || 12; // Convert midnight (0) to 12

    return `${formattedHours < 10 ? `0${formattedHours}` : formattedHours}:${minutes}:00`;
  }
  const handleClick = async (doctorId: string) => {
    if (details) {
      if (startTime && endTime && date) {
        var options: Intl.DateTimeFormatOptions = { year: 'numeric', day: '2-digit', month: '2-digit' };

        var formattedDate = new Date(date).toLocaleDateString('en-uk', options).split('/').reverse().join('-');
        await createAppointment({
          startTime: convertDate(startTime),
          endTime: convertDate(endTime),
          date: formattedDate,
          patientId: localStorage.getItem('userId')!,
          doctorId: doctorId,
        });
      } else {
        return;
      }
    }
    toast.success('Booked Successfully');
  };

  return (
    <div className=" paddingt-150 pb-4">
      <Row>
        <Col md={6}>
          <ImageMaker alt="doctor" src="/images/details/doctor.avif" className="rounded overflow-hidden" />
        </Col>
        <Col md={6}>
          <h3 className="text-gray fw-semibold">
            <span className="fw-semibold"> Dr Name : </span>
            {details?.doctorFirstName}&#160;
            {details?.doctorLastName}
          </h3>
          <h4 className="my-4 text-dark">
            <span className="fw-semibold">Phone Number :</span> {details?.doctorPhoneNumber}
          </h4>
          <h4 className="my-4 text-dark">
            {' '}
            <span className="fw-semibold">Email :</span> {details?.doctorEmail}
          </h4>

          <h4 className="text-dark">
            <span className="fw-semibold">Specialization :</span> {details?.specialization.specializationName}
          </h4>
          <h2 className="my-4   text-dark-blue">Book an appointment</h2>

          <div className="flex-between gap-3">
            <div>
              <p>Start time</p>
              <Calendar value={startTime} onChange={e => setStartTime(e.value)} timeOnly />
            </div>
            <div>
              <p>End time</p>
              <Calendar value={endTime} onChange={e => setEndTime(e.value)} timeOnly />
            </div>
            <div>
              <p>Date</p>
              <Calendar variant="filled" value={date} onChange={e => setDate(e.value)} />
            </div>
          </div>
          <ButtonMaker design="mt-3" text="Book Now" onClick={() => details?.id && handleClick(details.id)} />
        </Col>
      </Row>
    </div>
  );
};

export default DoctorDetails;
