'use server';

import React, { ReactNode } from 'react';
import { Container } from 'reactstrap';

type Props = {
  children: ReactNode;
  params: { locale: string; path?: string };
};

const layout = (props: Props) => {
  const {  children } = props;

  return (
    <div className="bg-muted">
      <Container>
        <main className="min-vh-100 ">{children}</main>
      </Container>
    </div>
  );
};

export default layout;
