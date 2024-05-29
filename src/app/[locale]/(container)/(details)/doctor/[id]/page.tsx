import React from 'react';
import { DoctorDetails } from '@components';

const Page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <DoctorDetails id={params.id} />
    </div>
  );
};

export default Page;
