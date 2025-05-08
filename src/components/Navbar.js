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
    <BootstrapNavbar expand="lg" className="navbar py-2 shadow-sm">
      <Container>
        {/* Logo */}
        <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand">
          <span className="brand-text">JobViet</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom mx-1">
              Việc làm
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/create-cv"
              className="nav-link-custom mx-1"
            >
              Tạo CV
            </Nav.Link>
          </Nav>

          {/* Authentication Buttons */}
          <Nav className="ms-auto d-flex align-items-center">
            <Button as={Link} to="/login" className="btn-login nav-button me-2">
              Đăng nhập
            </Button>
            <Button
              as={Link}
              to="/signup"
              className="btn-register nav-button me-2"
            >
              Đăng ký
            </Button>
            <Button as={Link} to="/login" className="btn-post nav-button">
              Đăng tin
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
