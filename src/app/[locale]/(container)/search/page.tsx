import React from 'react';
import { SearchResult } from '@components';

const page = async ({
  params,
  searchParams,
}: {
  params: {
    locale: 'ar' | 'en';
  };
  searchParams: {
    q: string;
  };
}) => {
  return <SearchResult keyword={searchParams.q} />;
};

export default page;
