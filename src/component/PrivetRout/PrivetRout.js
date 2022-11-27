import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const PrivetRout = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location= useLocation();
    
    if(loading){
        return <div className='mx-auto '>
            <div className="radial-progress text-center mx-auto " style={{"--value":80}}>80%</div>
        </div>
    }
    if(user && user.email){
        return children;
    }
    return  <Navigate to='/login' state={{ from: location }} replace></Navigate> 
};

export default PrivetRout;