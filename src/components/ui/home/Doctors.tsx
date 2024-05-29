'use client';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTranslate } from '@app/hooks';
import { ImageMaker } from '@components';
import Link from 'next/link';
import { getDoctor } from '../../../../services/application/doctor';
import { IDoctor } from './type';

const Doctors = () => {
  const t = useTranslate('COMP_Our_Team');
  const [doctors, setDoctors] = useState([]);
  // useEffect(() => {
  //   const getAllDoctors = async () => {
  //     const doctorsData = await getDoctor();
  //     setDoctors(doctorsData);
  //   };

  //   getAllDoctors();
  // }, []);

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const data = await getDoctor();
        setDoctors(data);
      } catch (error) {}
    };

    fetchSpecializations();
  }, []);

  return (
    <div className="py-5 our-team">
      <Container>
        <Row>
          <div className="mb-5">
            <h3>Doctors</h3>
          </div>
        </Row>
        <Row>
          {doctors.slice(0, 4).map((item: IDoctor) => (
            <Col md={6} lg={3} key={item.id}>
              <Link href={`/doctor/${item.id}`}>
                <div className="position-relative team-card rounded overflow-hidden">
                  <ImageMaker src="/images/services/doctor.webp" />
                  <div className="position-absolute  dark_overlay">
                    <div className="py-4 text-center dark-content  position-absolute bottom-0 start-50 translate-middle-x">
                      <h5 className="mb-2 text-white">
                        {item.doctorFirstName} {item.doctorLastName}
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
