'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';

import { CardMaker, CarouselMaker } from '@components';
import { useTranslate } from '@app/hooks';
import Link from 'next/link';
import { ICategory } from './type';
import { getSpecialization } from '../../../../services/application/category';

const Categories = () => {
  const t = useTranslate('COMP_Find_Your_Home');
  const [specializations, setSpecializations] = useState([]);
  // useEffect(() => {
  //   const getAllSpecialization = async () => {
  //     const specializationData = await getSpecialization();
  //     setSpecializationData(specializationData);
  //   };

  //   getAllSpecialization();
  // }, []);

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const data = await getSpecialization();
        setSpecializations(data);
      } catch (error) {
       }
    };

    fetchSpecializations();
  }, []);

  const items = specializations.map((item: ICategory) => (
    <CardMaker key={item.id} img="/images/services/img1.avif" href="" className="rounded overflow-hidden">
      <div className="text-center my-3">
        <h5 className="text-secondary ">{item.specializationName}</h5>

        <div className="px-3 my-3">
          <Link href={`/doctors-list/${item.id}`} className=" text-white d-block  btn btn-primary py-2   pointer">
            view Doctors
          </Link>
        </div>
      </div>
    </CardMaker>
  ));

   return (
    <div className="bg-muted py-5">
      <Container>
        <Row>
          <div className="mb-4">
            <h3>Categories</h3>
          </div>
        </Row>
        <CarouselMaker
          outNav={false}
          numVisible={4}
          items={items}
          autoplay
          navigation={false}
          className="product-details-slider"
          pagination
          paginationStyle="dashes"
        />
      </Container>
    </div>
  );
};

export default Categories;
