import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { users } = useAuth();
    const location = useLocation()
    return (
        users.email ? children :
            <Navigate to='/login' state={{from: location}}/>
    );
};

export default PrivateRoute;