import React from 'react';
import { Link } from 'react-router-dom';
import './MiddleProduct.css';

const MiddleProduct = ({ product }) => {

    const { name, img, description, supplier, price, quantity } = product;
    return (
        <div className='product-review middle-part'>
            <img src={img} alt="images" />
            <div className='product-description'>
                <h6 className='names'>{name}</h6>
                <p> <span>description:</span> {description}</p>
                <p> <span>supplier:</span> {supplier}</p>
                <p><span>price:</span> ${price}</p>
                <p><span>quantity:</span> {quantity}</p>
                <Link className='fw-bold text-decoration-none update-btn' to='/inventory'>Learn more</Link>
            </div>
        </div>
    );
};

export default MiddleProduct;