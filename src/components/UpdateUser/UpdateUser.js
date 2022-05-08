import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './UpdateUser.css';

const UpdateUser = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);


    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = { name, email }


        //------- Update user---------
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('User updated successfully !! Go to database to see')
                event.target.reset();
            })
    };
    return (
        <div>
            <div className='mt-2'>
                <h6 className='text-center font-serif fw-bold'>Please update user</h6>
                <Form onSubmit={handleUpdateUser} className='container w-25'>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                        <Form.Label className='mb-0 font-serif'>Name</Form.Label>
                        <Form.Control size="sm" type="text" name="name" placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                        <Form.Label className='mb-0 font-serif'>Email</Form.Label>
                        <Form.Control size="sm" type="email" name="email" placeholder="email" />
                    </Form.Group>
                    <Button variant='outline-success' className='rounded-pill h-6 fw-bold  d-flex justify-center items-center' type='submit'>Update</Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateUser;