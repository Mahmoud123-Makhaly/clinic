'use client';
import React, { useEffect } from 'react';

import { useTranslate } from '@app/hooks';
import { CardMaker, CarouselMaker } from '@components';

import { carouselData } from './items';
import { Col, Row } from 'reactstrap';
import { useRouter } from '@navigation';
const HomeBanner = () => {
  const t = useTranslate('COMP_HomeBanner');

  const items = carouselData.map((item, index) => (
    <CardMaker key={index} className={` position-relative `} img={item.imgSrc}>
      <div
        className="pt-4 position-absolute text-center gap-1 gap-lg-3  top-50 start-50  translate-middle  flex-col w-100 h-100"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <h2 className="text-white m-0  fw-bold">{item.title}</h2>
        <Row>
          <Col lg={10} className="col-12 d-flex justify-content-center m-auto">
            <p className="text-white    text-center">{item.desc} </p>
          </Col>{' '}
        </Row>
      </div>
    </CardMaker>
  ));
  return <CarouselMaker pagination={false} items={items} numVisible={1} autoplay />;
};

export default HomeBanner;
