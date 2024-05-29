'use client';
import React from 'react';
 import { useToast } from '@app/hooks';
import { Form, Input } from 'reactstrap';
import { ButtonMaker } from '../../index';

const Subscribe = () => {
  const toast = useToast();

  const onSubmit = () => {
    toast.success('Subscribed successfully, check your email');
  };
  return (
    <Form className="d-flex gap-3">
      <Input type="text" placeholder="Your email address" />
      <ButtonMaker type="submit" text="Submit" outline design="bg-white border-primary fw-semibold" />
    </Form>
  );
};

export default Subscribe;
