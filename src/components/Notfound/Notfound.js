import React from 'react';
import './Notfound.css';
import image from '../../components/images/notfound.gif';

const Notfound = () => {
    return (
        <div>
            <div className='notFound'>
                <img src={image} alt="images" />
            </div>
        </div>
    );
};

export default Notfound;