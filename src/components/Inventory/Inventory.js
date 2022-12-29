import React from 'react';
import { useContext } from 'react';
import { authContext } from '../UserContext';

const Inventory = () => {
    const { user } = useContext(authContext);

    return (
        <div>
            <h2>This is Inventory for {user.displayName} </h2>
        </div>
    );
};

export default Inventory;