'use client';
import React, { useEffect } from 'react';

import {  HomePage } from '@components';

const Page = ({
  params,
}: {
  params: {
    locale: 'ar' | 'en';
  };
}) => {
  return (
    <React.Fragment>
      <HomePage />
    </React.Fragment>
  );
};

export default Page;
