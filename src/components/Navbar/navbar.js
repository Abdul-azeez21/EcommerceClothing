import React from "react";
import {
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";

const Menu = () => {
  return (
    <div class="container">
      <Navbar bg="white" expand="lg">
        <Navbar.Brand
          href="#home"
          class="display-6 text-dark"
          style={{ textDecoration: "none" }}
        >
          O.A FW
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-dark" style={{ fontSize: "20px" }}>
            <Nav.Link href="#home">BLOG</Nav.Link>
            <Nav.Link href="/shop">SHOP</Nav.Link>
            <NavDropdown title="COLLECTIONS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Children</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
