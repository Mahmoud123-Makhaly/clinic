'use client';

import React, { useEffect } from 'react';
import { Spinner } from 'reactstrap';


import { usePathname } from '@navigation';
import { Loader } from '@components';

const Preloader = () => {
 

  return (
    <div id="preloader">
      <Loader />
    </div>
  );
};
export default Preloader;
