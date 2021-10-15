import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../../Image/logo2.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const {LogOut,user}=useAuth();
    return (
        <div>
          <Navbar>
  <Container>
  <img src={Logo} alt="" width="200" height="50" />
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
   
    <NavLink to="/Home" className="NavLink"><FontAwesomeIcon icon={faCartPlus} /></NavLink>
    <NavLink to="/Login"className="NavLink">Login</NavLink>
    <NavLink to="/Register"className="NavLink"><button className="btn btn-danger">Sign Up</button></NavLink>
    </Navbar.Collapse>
  </Container>
</Navbar>
          

        </div>
    );
};

export default Header;

