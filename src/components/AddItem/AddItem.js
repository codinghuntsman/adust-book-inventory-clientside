import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddItem.css';
const AddItem = () => {


    const handleAddNewItem = (event) => {
        event.preventDefault();
        const bookName = event.target.name1.value;
        const writerName = event.target.name2.value;
        const supplierName = event.target.name3.value;
        const email = event.target.email.value;
        const user = { bookName, writerName, supplierName, email }


        //-------Post method: post a user into backend---------
        fetch('http://localhost:5000/user', {
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
                    <Form.Label className='mb-0 font-serif'>Book name</Form.Label>
                    <Form.Control size="sm" type="text" name="name1" placeholder="Book name" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Writer name</Form.Label>
                    <Form.Control size="sm" type="text" name="name2" placeholder="Writer name" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Supplier name</Form.Label>
                    <Form.Control size="sm" type="text" name="name3" placeholder="Supplier name" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mb-0 font-serif'>Email</Form.Label>
                    <Form.Control size="sm" type="email" name="email" placeholder="Your email" />
                </Form.Group>
                <Button variant='outline-info' className='rounded-pill h-6 fw-bold  d-flex justify-center items-center' type='submit'>Add item</Button>
            </Form>
        </div>
    );
};

export default AddItem;