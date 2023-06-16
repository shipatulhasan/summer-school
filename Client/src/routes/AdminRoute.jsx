import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Spinner/Loader';
import { AuthContext } from '../contexts/AuthProvider';
import {useRole} from '../hooks/useRole'

const AdminRoutes = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    const {role,roleLoading} = useRole(user?.email)
    let location = useLocation();

    if(roleLoading||isLoading){
        return <Loader height={'min-h-[60vh]'}/>
    }
    if(user?.uid && role==='admin'){
        return children
    }
    return <Navigate to = '/login' state={{ from: location }} replace />
};

export default AdminRoutes;