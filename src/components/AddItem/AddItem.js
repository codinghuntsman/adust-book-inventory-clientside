import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddItem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../../firebase.init';


const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleAddNewItem = (event) => {
        event.preventDefault();
        const name = event.target.name1.value;
        const supplier = event.target.name2.value;
        const description = event.target.name3.value;
        const price = event.target.name4.value;
        const quantity = event.target.name5.value;
        const img = event.target.name6.value;
        const email = event.target.email.value;
        const user = { name, supplier, description, price, quantity, img, email }


        //-------Post method: post a user into backend---------
        fetch('https://damp-tundra-15711.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('items added successfully !! Go to database to see')
                event.target.reset();
            })
    };
    return (
        <div className='mt-2 container addItems-section'>
            <h6 className='text-center font-serif fw-bold'>Please add a new item</h6>
            <Form onSubmit={handleAddNewItem} className='w-50 mx-auto'>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Book Name</Form.Label>
                    <Form.Control size="sm" type="text" name="name1" placeholder="Book name" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Supplier Name</Form.Label>
                    <Form.Control size="sm" type="text" name="name2" placeholder="Supplier name" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Description</Form.Label>
                    <Form.Control size="sm" type="text" name="name3" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Price</Form.Label>
                    <Form.Control size="sm" type="number" name="name4" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Quantity</Form.Label>
                    <Form.Control size="sm" type="number" name="name5" placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Image</Form.Label>
                    <Form.Control size="sm" type="text" name="name6" placeholder="Image url" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Email</Form.Label>
                    <Form.Control size="sm" value={user.email} type="email" name="email" placeholder="Your email" />
                </Form.Group>
                <Button variant='outline-info' className='rounded-pill h-6 fw-bold  d-flex justify-center items-center' type='submit'>Add item</Button>
            </Form>
        </div>
    );
};

export default AddItem;