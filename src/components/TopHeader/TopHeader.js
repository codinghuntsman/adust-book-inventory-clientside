import React from 'react';
import './TopHeader.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../components/images/logo.png';

const TopHeader = () => {
    return (
        <Navbar collapseOnSelect bg="dark bg-gradient" variant="dark" className='top-header-height'>
            <Container>
                <Link className='text-dark fw-bold text-decoration-none text-white title-Styles' to='/'> <img src={logo} alt="logo" /> </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto Button-Height">
                        <Button variant='outline-info rounded-pill text-white w-100'>See all books</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopHeader;