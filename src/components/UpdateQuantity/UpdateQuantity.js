import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './UpdateQuantity.css';

const UpdateQuantity = () => {
    const [isReload, setIsReload] = useState(true)

    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `https://stormy-mesa-19852.herokuapp.com/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isReload]);


    const handleUpdateQuantity = (event) => {
        event.preventDefault();
        const quantity = event.target.name.value;
        const newQuantity = parseInt(quantity) + parseInt(user.quantity);
        const updatedQuantity = { quantity: newQuantity };

        //------- Update Quantity---------
        const url = `https://stormy-mesa-19852.herokuapp.com/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload);
                alert('Quantity updated successfully !!')
                event.target.reset();
            })
    };
    return (
        <div>
            <div className='mt-2'>
                <h6 className='text-center font-serif fw-bold'>Please update quantity</h6>
                <div className='update-quantity-parent-div'>
                    <div className='image'>
                        <img src={user.img} alt="images" />
                    </div>
                    <div className='update-quantity'>
                        <p><span>Name: </span>{user.name}</p>
                        <p><span>Supplier: </span>{user.supplier}</p>
                        <p><span>Quantity: </span>{user.quantity}</p>
                        <p><span>Description: </span>{user.description}</p>
                    </div>
                </div>
                <Form onSubmit={handleUpdateQuantity} className='container'>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                        <Form.Label className='mb-0 w-100 font-serif'>Add Quantity</Form.Label>
                        <Form.Control className='w-50' size="sm" type="number" name="name" placeholder="Add quantity" required />
                    </Form.Group>
                    <div className='button-control'>
                        <Button size='sm' variant='outline-success' className='fw-bold me-3' type='submit'>Add</Button>
                        <Button size='sm' variant='outline-success' className='fw-bold ms-3'>Delivered</Button>
                        <Button size='sm' variant='outline-info' className='add-item-btn font-serif ms-3'><Link className='fw-bold text-dark text-decoration-none' to="/home">Home</Link></Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default UpdateQuantity;