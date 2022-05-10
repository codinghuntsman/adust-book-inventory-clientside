import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageInventory.css';

const ManageInventory = ({ product }) => {
    const { name, supplier, quantity, description } = product;

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://stormy-mesa-19852.herokuapp.com/user")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    //-----------Delete a user from database----------
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            const url = `https://stormy-mesa-19852.herokuapp.com/user/${id}`;
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
        <div className='manage-inventory'>
            <div>
                <p><span>Name:</span> {name}</p>
                <p><span>Supplier:</span> {supplier}</p>
                <p><span>Quantity:</span> {quantity}</p>
                <p><span>Description:</span> {description}</p>
                <div>
                    <Button onClick={() => handleDelete(product._id)} key={product._id} size='sm' variant='outline-danger' className='delete-btn font-serif'> <Link className='fw-bold text-dark text-decoration-none' to="/inventory">Delete</Link></Button>
                </div>
                <div>
                    <Button size='sm' variant='outline-info' className='add-item-btn font-serif'><Link className='fw-bold text-dark text-decoration-none' to="/additem">Add new item</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;

// to={`/update/${product._id}`}