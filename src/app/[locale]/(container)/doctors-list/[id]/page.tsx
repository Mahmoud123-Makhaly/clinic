import React from 'react';
import { DoctorsList } from '@components';

const Page = async ({
  params,
}: {
  params: {
    locale: 'ar' | 'en';
    id: string;
  };
}) => {
  return (
    <div className="pt-5">
      <DoctorsList id={Number(params.id)} />
    </div>
  );
};

export default Page;
