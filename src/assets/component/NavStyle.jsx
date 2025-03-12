import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/nav.css';
import React from 'react';

const NavStyle = () => {
  return (
      <Navbar  expand="lg" className="bg-body-tertiary">
        <Container>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <ul>
              <li style={{fontSize:'30px'}} className='active'>
                <a href='/'>Home</a>
                </li>
              <li style={{fontSize:'30px'}} className='active'>
                <a href='/about'>AboutMe</a>
                </li>
              <li style={{fontSize:'30px'}} className='active'>
                <a href='/link'>Links</a>
                </li>
              <li style={{fontSize:'30px'}} className='active'>
                <a href='/contact'>Contact</a>
                </li>
              </ul>
         
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
  );
};

export default NavStyle;

