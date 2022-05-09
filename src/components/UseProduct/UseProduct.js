import { useEffect, useState } from 'react';

const UseProduct = () => {
    // ----------This is custom hook------------
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://damp-tundra-15711.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
};

export default UseProduct;