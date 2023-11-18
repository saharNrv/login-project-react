import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
       <Navbar  style={{background:'#f5f0fe',boxShadow:'0 0 12px #ccc'}}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink style={{color:'#000',marginLeft:30}} to="/home">Home</NavLink>
            <NavLink style={{color:'#000',marginLeft:30}} to="/users">User List</NavLink>
            <NavLink style={{color:'#000',marginLeft:30}} to="/form">form</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
