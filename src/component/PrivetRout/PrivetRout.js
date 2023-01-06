import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './PrivetRout.css'

const PrivetRout = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location= useLocation();
    
    if(loading){
        return <div className='loding-div-privet-rout'>
             <progress className="progress w-56"></progress>
        </div>
    }
    if(user && user.email){
        return children;
    }
    return  <Navigate to='/login' state={{ from: location }} replace></Navigate> 
};

export default PrivetRout;