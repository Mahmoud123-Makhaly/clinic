'use client';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from '@navigation';
import { BackButton, CardMaker } from '@components';
import { Col, Row } from 'reactstrap';

import { searchDoctor } from '../../../../services/application/doctor';
import { ISearchDoctor } from './type';

interface ISearchResultProps {
  keyword: string;
}
const SearchResult = (props: ISearchResultProps) => {
  const { keyword } = props;

  const [search, setSearch] = useState([]);

  useEffect(() => {
    const getSearchResult = async () => {
      const data = await searchDoctor(keyword);
      setSearch(data);
    };

    getSearchResult();
  }, []);
  const router = useRouter();

  return (
    <div className="paddingt-100">
      <div className="pt-5">
        <BackButton direction="left" onClick={() => router.back()} />
      </div>
      <Row className="py-4">
        {search?.map((item: ISearchDoctor) => (
          <Col md={6} lg={3} key={item.id}>
            <Link href={`/product${item.id}`}>
              <CardMaker img="/images/services/doctor.webp" href="" className="rounded overflow-hidden">
                <div className="p-4">
                  <h6 className=" text-secondary">
                    {item.doctorFirstName}&nbsp;
                    {item.doctorLastName}
                  </h6>
                  <p className="text-gray fw-medium">{item.doctorEmail}</p>
                </div>
              </CardMaker>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchResult;
