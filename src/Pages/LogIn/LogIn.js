import React from 'react';
import useAuth from './Hooks/useAuth';

const LogIn = () => {
    const {users, signInUsingGoogle, logOut } = useAuth()
    return (
        <div>
            <h4>Please log In Using G-mail</h4>
            <button className='btn btn-success' onClick={signInUsingGoogle}>Google sign in</button>
        </div>
    );
};

export default LogIn;