import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='container' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to='/'>React Redux Axios Api</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>                    
                    <Nav.Link as={Link} to='/user'>User</Nav.Link>                    
                    <Nav.Link as={Link} to='/randomUser'>Random User</Nav.Link>                    
                    <Nav.Link as={Link} to='/country'>Rest Country</Nav.Link>                    
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;