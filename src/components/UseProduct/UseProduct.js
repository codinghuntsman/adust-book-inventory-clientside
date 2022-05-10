import { useEffect, useState } from 'react';

const UseProduct = () => {
    // ----------This is custom hook------------
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stormy-mesa-19852.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
};

export default UseProduct;