import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    //-----Show users data on inventory--------
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://damp-tundra-15711.herokuapp.com/user")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    //-----------Delete a user from database----------
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            const url = `https://damp-tundra-15711.herokuapp.com/user/${id}`;
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
            <h6 className='text-center font-sans mt-1 fw-bold'>Manage your inventory</h6>
            <div className='inventory mt-5'>
                {
                    users.map(user => <p key={user._id}> <span>name:</span>{user.name} <span>Email:</span>{user.email}
                        <button onClick={() => handleDelete(user._id)} className='bg-dark text-danger w-3'>X</button>
                        <Link className='ms-2' to={`/update/${user._id}`}>Update</Link></p>)
                }
            </div>
        </div>
    );
};

export default Inventory;