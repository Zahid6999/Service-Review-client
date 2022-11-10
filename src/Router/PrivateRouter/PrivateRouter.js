import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        <p className='text-yellow-500'>Loading...</p>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ form: location }} replace ></Navigate>
};

export default PrivateRouter;