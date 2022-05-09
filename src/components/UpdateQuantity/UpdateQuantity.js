import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './UpdateQuantity.css';

const UpdateQuantity = () => {
    const [isReaload, setIsRealod] = useState(true)

    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://damp-tundra-15711.herokuapp.com/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isReaload]);


    const handleUpdateQuantity = (event) => {
        event.preventDefault();
        const quantity = event.target.name.value;
        const newQuantity = parseInt(quantity) + parseInt(user.quantity);
        const updatedUser = { quantity: newQuantity };


        //------- Update Quantity---------
        const url = `https://damp-tundra-15711.herokuapp.com/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => res.json())
            .then(data => {
                setIsRealod(!isReaload);
                alert('User updated successfully !! Go to database to see')
                event.target.reset();
            })
    };
    return (
        <div>
            <div className='mt-2'>
                <h6 className='text-center font-serif fw-bold'>Please update quantity</h6>
                <Form onSubmit={handleUpdateQuantity} className='container w-25'>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                        <Form.Label className='mb-0 font-serif'>Quantity</Form.Label>
                        <Form.Control size="sm" type="number" name="name" placeholder="Quantity" />
                    </Form.Group>
                    <Button variant='outline-success' className='rounded-pill h-6 fw-bold  d-flex justify-center items-center' type='submit'>Update</Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateQuantity;