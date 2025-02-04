import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logiclink.png';
import {Link} from 'react-router-dom'

export default function MyNavbar() {
  return (
    <>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/" style={{
             color: "#2a5cbf", fontSize: "24px" , fontWeight:"bolder"
        }}>
      <img src={logo} alt="logo" className="logoimg"  style={{
    height: "5vh" ,  width:" 5vh"}}/>
        Logi-Links</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <NavDropdown title="About us" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/fnq">F&Q</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                Contact us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/details">Company details</NavDropdown.Item>
            
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}
