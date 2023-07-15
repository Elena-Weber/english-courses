import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="m-3 p-2 text-center main-heading">
          Курсы английского языка от English Witch Elena
        </h1>
        <Navbar className="d-flex navi mb-4 p-4" variant="dark" expand="md">
          <Container className="d-flex">
            <Navbar.Brand href="/" className="text-decoration-none fs-5 fw-bold navi-link mx-0 p-2 mx-2">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/elementary" className="text-decoration-none fs-5 fw-bold navi-link px-2 mx-2">Elementary</Nav.Link>
                <Nav.Link href="/pre-intermediate" className="text-decoration-none fs-5 fw-bold navi-link px-2 mx-2">Pre-Intermediate</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    <Outlet />
    </>
  )
};

export default Layout;