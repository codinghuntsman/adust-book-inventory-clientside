import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    const handlePostUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email }


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
                alert('User added successfully !! Go to database to see')
                event.target.reset();
            })
    };

    //-----Show users data on client side--------
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    //-----------Delete a user from database----------
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining)
                    }
                })
        }
    };

    return (
        <div>
            <h4 className='text-center font-sans mt-1 fw-bold'>Your inventory</h4>
            <div className='d-flex justify-center'>
                <div className='mt-2'>
                    <h6 className='text-center font-serif fw-bold'>Please add user</h6>
                    <Form onSubmit={handlePostUser} className='container w-100'>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label className='mb-0 font-serif'>Name</Form.Label>
                            <Form.Control size="sm" type="text" name="name" placeholder="name" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label className='mb-0 font-serif'>Email</Form.Label>
                            <Form.Control size="sm" type="email" name="email" placeholder="email" />
                        </Form.Group>
                        <Button variant='outline-info' className='rounded-pill h-6 fw-bold  d-flex justify-center items-center' type='submit'>submit</Button>
                    </Form>
                </div>

                <div className='inventory mt-5'>
                    {
                        users.map(user => <p key={user._id}> <span>name:</span>{user.name} <span>Email:</span>{user.email}
                            <button onClick={() => handleDelete(user._id)} className='bg-dark text-danger w-3'>X</button>
                            <Link className='ms-2' to={`/update/${user._id}`}>Update</Link></p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;