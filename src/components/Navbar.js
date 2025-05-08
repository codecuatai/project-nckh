import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="navbar">
      <Container fluid>
        <BootstrapNavbar.Brand as={Link} to="/">
          JobViet
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Việc làm
            </Nav.Link>
            <Nav.Link as={Link} to="/create-cv">
              Tạo CV
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button as={Link} to="/login" className="btn-login me-2">
              Đăng nhập
            </Button>
            <Button as={Link} to="/signup" className="btn-register me-2">
              Đăng ký
            </Button>
            <Button as={Link} to="/login" className="btn-post">
              Đăng tin
            </Button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
