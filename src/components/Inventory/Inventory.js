import { useState, useEffect } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';
import './Inventory.css';

const Inventory = () => {

    //-----Show users data on inventory ManageInventory--------
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    //------------------------All inventory item----------------------
    return (
        <div className='inventory-page'>
            <h6 className='text-center font-serif fw-bold'>Manage your inventory</h6>
            <div className='container inventory mt-2'>
                {
                    users.map(user => <ManageInventory key={user._id} product={user}></ManageInventory>)
                }
            </div>
        </div>
    );
};

export default Inventory;