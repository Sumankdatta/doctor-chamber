import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../context/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [isAdmin, isLoading] = useAdmin(user?.email)

    if (loading || isLoading) {
        return <p>Loading .....</p>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};


export default AdminRoute;