import Link from 'next/link';

import logo from '../assets/images/logo_chatter_color_2.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getUser, setLogoutData } from '../redux/userSlice';
import { LogoType } from '../types/chat';
import { useRouter } from 'next/dist/client/router';
import dynamic from "next/dynamic"
import useAuth from '../hooks/useAuth';

function Header() {
  const image = logo as unknown as LogoType;
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUser);
  const { logout } = useAuth()

  return (
    <Navbar expand="lg" className="mx-4 header header-height w-100" variant="dark">
      <Container className="mw-100 w-100 d-flex justify-content-between m-0">
        <Navbar.Brand className="brand-logo">
          <img src={image.src} className="mh-100 mw-100 d-block" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {userData.authToken?.length ? (
            <Nav className="d-flex gap-3">
              <Link href="/" className="nav-item pointer">
                <a onClick={logout}> Abandonar Sesión</a>
              </Link>
            </Nav>
          ) : (
            <Nav className="d-flex gap-3">
              <Link href="/register" className="nav-item">
                Registrarse
              </Link>
              <Link href="/" className={'nav-item active'}>
                Iniciar Sesión
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
