'use client';
import React, { useEffect, useState } from 'react';
import { Link } from '@navigation';
import { BackButton, ButtonMaker, CardMaker, ImageMaker } from '@components';
import { Col, Row } from 'reactstrap';
import { specializationDoctors } from './type';
import { getSpecializationDoctorsById } from '../../../../services/application/specializationDoctors';

interface IDoctorsListProps {
  id: number;
}
const DoctorsList = (props: IDoctorsListProps) => {
  const { id } = props;

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const getDoctors = async () => {
      const data = await getSpecializationDoctorsById(id);
      setDoctors(data);
    };

    getDoctors();
  }, []);
  return (
    <div>
      <Row className=" paddingt-100 pb-4">
        {doctors.length ? (
          doctors.map((item: specializationDoctors) => (
            <Col md={6} lg={3} key={item.id}>
              <Link href={`/doctor/${item.id}`}>
                <CardMaker img="/images/services/doctor.webp" href="" className="rounded overflow-hidden">
                  <div className="p-4">
                    <h6 className=" text-secondary">
                      {' '}
                      {item.doctorFirstName} {item.doctorLastName}
                    </h6>
                    <p className="text-gray fw-medium">{item.doctorPhoneNumber}</p>
                  </div>
                </CardMaker>
              </Link>
            </Col>
          ))
        ) : (
          <div className="text-center my-4">
            <ImageMaker src="/images/list/empty.png" width={400} height={300} />
            <h3 className="my-4">No Doctors Found </h3>
            <div className="flex-center">
              <Link href="/" className="btn btn-primary">
                Back To Home
              </Link>
            </div>
          </div>
        )}
      </Row>
    </div>
  );
};

export default DoctorsList;
