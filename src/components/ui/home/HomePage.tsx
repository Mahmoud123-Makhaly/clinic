'use client';
import React, { useEffect } from 'react';
import HomeBanner from './HomeBanner';
import Categories from './Categories';
import Doctors from './Doctors';
import { useRouter } from '@navigation';

const HomePage = () => {
  const token = localStorage.getItem('token');
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push('/auth/login');
    }
  }, []);
  return (
    <React.Fragment>
      <HomeBanner />
      <Categories />
      <Doctors />
    </React.Fragment>
  );
};

export default HomePage;
