import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BottomProduct from '../BottomProduct/BottomProduct';
import MiddleProduct from '../MiddleProduct/MiddleProduct';
import ProductReview from '../ProductReview/ProductReview';
import UseProduct from '../UseProduct/UseProduct';
import './Home.css';

const Home = () => {
    //---------UseProduct custom hook has imported here-------------
    const [products, setProducts] = UseProduct();
    const newProducts = products.slice(0, 6);

    const [middleProducts, setMiddleProducts] = UseProduct();
    const newMiddleProducts = middleProducts.slice(0, 3);

    const [bottomProducts, setBottomProducts] = UseProduct();
    const newBottomProducts = bottomProducts.slice(0, 4);

    return (
        <div className='mt-2'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/TLDnMLH/bannar.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Your trusted book archives</h3>
                        <p>You can archive your favorite book in our trusted platform forever.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/hLfgK4t/b1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>You can archive your favorite books</h3>
                        <p>We promise you, your favorite book more safe here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/5xsNZjn/books6.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Explore our room and drop your opinion</h3>
                        <p>Please share your opinion and explore more and more.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* ------------Top product section------------- */}
            <div className='container mt-5'>
                <h6 className='text-center font-sans'>MANAGE YOUR BOOKS</h6>
                <h4 className='text-center font-serif'>THE TOP POPULAR BOOKS FOR YOU</h4>
                <div className='top-single-product'>
                    {
                        newProducts.map(product => <ProductReview key={product.id} product={product}></ProductReview>)
                    }
                </div>
            </div>
            <div className='container d-flex justify-evenly mt-3' id='manage'>
                <Link className='fw-bold text-decoration-none manage-buttons' to='/inventory'>MANAGE INVENTORY</Link>
                <Link className='fw-bold text-decoration-none manage-buttons' to='/additem'>ADD NEW ITEM</Link>
            </div>

            <div className='why-adust'>
                <div className='container'>
                    <h6 className='text-light pt-3 font-serif'>WHY ADUST ONLINE ARCHIVE</h6>
                    <p className='text-light'>
                        ADUST provide a world wide archives that your favorite books archive in my room forever. one time archives your favorite book and any time get the book from our online room. ADUST promise you, your favorite books are 100% safe here.
                    </p>
                    <Button variant='outline-info rounded-pill w-22 h-7'> LEARN MORE</Button>
                </div>
            </div>

            {/* -----------Middle product section------------- */}
            <div className='middle-section'>
                <h4 className='text-center font-serif'>YOUR POPULAR BOOKS</h4>
                <div className='middle-single-product'>
                    {
                        newMiddleProducts.map(newMiddleProduct => <MiddleProduct key={newMiddleProduct.id} product={newMiddleProduct}></MiddleProduct>)
                    }
                </div>
            </div>

            {/* -----------Bottom product section------------- */}
            <div className='bottom-section'>
                <h4 className='text-center font-serif'>RESENT UPLOADED BOOKS</h4>
                <div className='bottom-single-product'>
                    {
                        newBottomProducts.map(newBottomProduct => <BottomProduct key={newBottomProduct.id} product={newBottomProduct}></BottomProduct>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;