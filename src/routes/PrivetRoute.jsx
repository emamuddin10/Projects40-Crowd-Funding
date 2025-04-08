import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lotti from '../components/Lotti';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    
    if(loading){
        return <Lotti></Lotti>
    }

   if(user){
    return children
   }
   return <Navigate state={location.pathname}  to='/signIn'></Navigate>
};

export default PrivetRoute;