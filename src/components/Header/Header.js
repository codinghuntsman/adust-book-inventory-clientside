import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import adust from '../../components/images/adust.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar className='height-control sticky-top text-center' collapseOnSelect expand="sm" variant="light">
            <Container>
                <Nav>
                    <Link className='text-dark fw-bold text-decoration-none text-black nav-title' to='/'> <img src={adust} alt="logo" /></Link>
                    <h6 className='tittles'>ADUST ONLINE BOOK ARCHIVE</h6>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fs-6 Font-styles">
                        <CustomLink className="m-1" to='/'>Home</CustomLink>
                        <CustomLink className="m-1 me-2" to='/inventory'>Inventory</CustomLink>
                        <CustomLink className="m-1 me-2" to='/blogs'>Blogs</CustomLink>

                        {/*-----------Conditional toggle, Login and Logout--------------*/}
                        {user ? (
                            <Nav className='logout'>
                                <Button variant='outline-success rounded-pill' onClick={() => signOut(auth)}>Logout</Button>
                            </Nav>
                        ) :
                            (<Nav className='Login'>
                                <Link className='text-decoration-none rounded-pill ms-2 me-2 text-white' to='/login'>Login</Link>
                            </Nav>
                            )}
                        <Nav className='register'>
                            <Link className='text-decoration-none rounded-pill ms-2 me-2 text-white' to='/register'>Register</Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;