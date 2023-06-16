import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Spinner/Loader';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    let location = useLocation();

    if(isLoading){
        return <Loader height={'min-h-[60vh]'}/>
    }
    if(user?.uid){
        return children
    }
    return <Navigate to = '/login' state={{ from: location }} replace />
};

export default PrivateRoute;