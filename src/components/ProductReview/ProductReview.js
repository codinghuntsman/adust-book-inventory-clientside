import React from 'react';
import { Link } from 'react-router-dom';
import './ProductReview.css';

const ProductReview = ({ product }) => {

    const { name, img, description, price, supplier, quantity } = product;



    return (
        <div className='product-review'>
            <img src={img} alt="images" />
            <div className='product-description'>
                <h6 className='names'>{name}</h6>
                <p> <span>description:</span> {description}</p>
                <p> <span>supplier:</span> {supplier}</p>
                <p><span>price:</span> ${price}</p>
                <p><span>quantity:</span> {quantity}</p>
            </div>
            <Link className='fw-bold text-decoration-none update-btn' to={`/update/${product._id}`} >UPDATE</Link>
        </div>
    );
};

export default ProductReview;