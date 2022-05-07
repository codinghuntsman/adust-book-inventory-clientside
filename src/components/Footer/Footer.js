import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const currentDate = date.getDate();
    const year = date.getFullYear();
    return (
        <div className='parent-footer'>
            <div className='top-footer'>
                <h6 className='font-serif text-light mr-3 d-flex items-center mb-0'>Register for free</h6>
                <Button className='font-mono text-light d-flex justify-center items-center' variant='outline-success rounded-pill w-20 h-6'>SIGN UP!</Button>
            </div>
            <hr />
            <div className='bottom-footer'>
                <div className='footer-child'>
                    <h6>You can follow us</h6>
                    <span className='text-light'><BsFacebook /></span>
                    <span className='text-light'><AiFillTwitterCircle /></span>
                    <span className='text-light'>< BsInstagram /></span>
                </div>
            </div>
            <hr />
            <div className='ground-footer'>
                <h6>Copyright&copy; by Md Sajedul Islam all right reserved-- <span>{day}, {month} {currentDate}, {year}</span></h6>
            </div>
        </div>
    );
};

export default Footer;