import React from 'react';
import { AppointmentDetails } from '@components';

const page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <AppointmentDetails id={Number(params.id)} />;
};

export default page;
