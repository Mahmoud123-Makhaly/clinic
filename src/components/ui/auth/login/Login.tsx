'use client';

import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import * as Yup from 'yup';
import { Field, FormikHelpers } from 'formik';
import { useSearchParams } from 'next/navigation';
import { Divider } from 'primereact/divider';

import { FormFieldType, AppForm, SubmitButton, ImageMaker, ButtonMaker } from '@components';
import { useTranslate } from '@app/hooks';
import { Link, useRouter } from '@navigation';
import { SignIn } from '../../../../../services/application/signIn';
import { useSession } from 'next-auth/react';
import { removeToken } from '../../../../../services/auth';

const Login: React.FC = () => {
  const t = useTranslate('COMP_LoginForm');
  const [error, setError] = useState('');
  const router = useRouter();
  const formFields: Array<FormFieldType> = [
    {
      name: 'userName',
      label: t('USER_NAME'),
      type: 'text',
      design: 'mb-0',
    },
    {
      name: 'password',
      label: t('PASSWORD'),
      type: 'password',
    },
  ];


  const onSubmit = async (values: any, formikHelpers: FormikHelpers<any>) => {
    try {
      const token = await SignIn({
        userName: values.userName,
        password: values.password,
      });

      router.push('/');
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required(t('REQUIRED_USER_NAME')),
    password: Yup.string().required(t('REQUIRED_PASSWORD')),
  });
  const ActionComponent = ({
    isValid,
    dirty,
    isSubmitting,
  }: {
    isValid: boolean;
    dirty: boolean;
    isSubmitting: boolean;
  }) => (
    <div className="align-items-center">
      <SubmitButton design=" py-0" disabled={!isValid || !dirty || isSubmitting} isLoading={isSubmitting} block={true}>
        {t('LOGIN')}
      </SubmitButton>
    </div>
  );

  return (
    <div className="border p-4 rounded bg-white shadow ">
      <Row>
        <Link href={'/'} className="flex-center">
          <ImageMaker src="/images/Header/logo.svg" alt="" width={150} height={100} />
        </Link>

        <Col>
          <h5 className="fw-semibold m-0 text-center">{t('GREETING')}</h5>
          <Divider />
        </Col>
      </Row>
      <AppForm
        initialValues={{
          userName: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={validationSchema}
        fields={formFields}
        ActionComponent={ActionComponent}
        onSubmit={onSubmit}
      >
        <p className="text-danger"> {error}</p>
        <div className="flex-between mb-4 flex-wrap">
          <div className="d-flex align-items-center pe-2 ">
            <Field
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              title={t('REMEMBER_ME')}
              className="me-2 text-dark-blue form-check-input border-primary mt-0"
            />
            <label htmlFor="rememberMe" className="mb-0">
              {t('REMEMBER_ME')}
            </label>
          </div>
         
        </div>
      </AppForm>

      <div className="flex-center mt-4 gap-1">
        <h6 className="text-black fw-normal m-0 ">{t('DONT_HAVE_EMAIL')}</h6>
        <Link className="font-14 fw-bold" href={'/auth/sign-up'}>
          {t('SIGNUP')}
        </Link>
      </div>
    </div>
  );
};

export default Login;
