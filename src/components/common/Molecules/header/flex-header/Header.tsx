'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Container, Input, Nav } from 'reactstrap';

import { Link, usePathname, useRouter } from '@navigation';
import { ButtonMaker, ImageMaker, OffcanvasMaker, Search } from '@components';
import { useTranslate } from '@app/hooks';

import Navbar from './navbar/Navbar';
import Infobar from '../Infobar';
import MobileNav from '../MobileNav';
import LanguageSelect from './LanguageSelect';
import { removeToken } from '../../../../../../services/auth';

const Header = () => {
  const t = useTranslate('COMP_Header');
  const [canvasToggler, setCanvasToggler] = useState(false);
  const [keyword, setKeyword] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const { data: session } = useSession();

  const links = [
    { name: t('HOME'), href: '/', className: '' },
    { name: t('APPOINTMENTS'), href: '/appointments', className: '' },
  ];

  const handleSearch = (event: any) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(keyword)}`);
    setKeyword('');
  };

  const token = localStorage.getItem('token');
  return (
    <header className="flex-header py-3 fixed-top">
      <Container className="flex-between flex-wrap">
        <Link href={'/'}>
          <ImageMaker src="/images/header/logo.svg" width={80} height={80} className="logo" />
        </Link>
        <Navbar links={links} className="flex-between d-none d-lg-flex" />
        <form onSubmit={handleSearch}>
          <Input
            onChange={e => setKeyword(e.target.value)}
            value={keyword}
            type="text"
            className="form-control  "
            placeholder="search "
          />
        </form>

        <div className="flex gap-2">
          {!session?.user ? <></> : <Link href={'/profile/my-account'} className="rounded flex"></Link>}

          <LanguageSelect />

          {token ? (
            <ButtonMaker
              design="ms-4"
              onClick={() => {
                removeToken();
                router.push('/auth/login');
              }}
            >
              logout
              <i className="fa-solid fa-arrow-right-from-bracket ms-3 text-white"></i>
            </ButtonMaker>
          ) : (
            token && (
              <ButtonMaker
                design="ms-4"
                onClick={() => {
                  removeToken();
                  router.push('/auth/login');
                }}
              >
                Login
                <i className="fa-solid fa-arrow-right-from-bracket ms-3 text-white"></i>
              </ButtonMaker>
            )
          )}
          <ButtonMaker onClick={() => setCanvasToggler(!canvasToggler)} design="border-0 p-0 d-lg-none bg-white">
            <i className="fa-solid fa-bars text-primary"></i>
          </ButtonMaker>
          <OffcanvasMaker
            header={
              <Link href="/" className="width-80">
                <ImageMaker src="/images/logo.png" />
              </Link>
            }
            canvasBody={
              <Nav>
                <MobileNav items={links} onClick={() => setCanvasToggler(!canvasToggler)} />
              </Nav>
            }
            direction="end"
            isOpen={canvasToggler}
            offcavasToggler={() => setCanvasToggler(!canvasToggler)}
            closeIcon={<i className="fa-solid fa-xmark font-20 text-black"></i>}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
