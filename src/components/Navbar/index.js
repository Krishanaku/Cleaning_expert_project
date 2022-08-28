import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Images/logo.png';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Nav = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
            <div className='d-flex justify-content-center align-items-center'>
            <img src={Logo}  alt="logo" width="50px" height="50px" />
            <div className='d-flex flex-col'>
            <div>CLEANING </div>
            <div>EXPERT</div>
            </div>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <NavDropdown className='mx-2' title="Pest Control" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <div className='mx-2' style={{height:"10px",borderRight:"1px solid #B2B2B2"}}></div>

            <NavDropdown className='mx-2' title="Homing Cleaning" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <div className='mx-2' style={{height:"10px",borderRight:"1px solid #B2B2B2"}}></div>
            
          <Navbar.Text >
          <div className='mx-2'>
            <a href="#login">Covid Disinfection</a>
            </div>
          </Navbar.Text>
          <Navbar.Text className='mx-4'>
          <ShoppingCartOutlined style={{fontSize:"20px"}}/>
          <sup>2</sup>
          </Navbar.Text>
          <Navbar.Text >
          <div className='mx-2' >
            <a className='text-danger' href="#login">FREE QUOTES</a>
            </div>
          </Navbar.Text>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Nav;
