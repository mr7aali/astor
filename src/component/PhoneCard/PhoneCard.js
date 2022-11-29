import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';


import './PhoneCard.css'
const PhoneCard = ({ phone }) => {
    
   const tic = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
 </svg>
    const {setModeal}=useContext(AuthContext);
    const {   location, name,  postedTime, resalePrice, sellerName, yearsOfUse } = phone;
    return (
        <div className='single-phone'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='single-phone-img' src={phone?.picture} alt="Shoes" /></figure>


                <div className="card-body">


                    <h2 className="card-title text-primary text-2xl">{name}</h2>
                    <p>Original Price: {phone.originalPrice}$</p>
                    <p>Asking Price: {resalePrice}$</p>
                    <p>Used: {yearsOfUse} y</p>
                   
                   <p>Seller: {sellerName } 
                 { phone?.isVerified &&
                   <small className='text-primary font-bold'>Verified</small> 
                   }
                   
                   </p>
                 
                   
                    <p>Location: {location}</p>
                    <p>Post On {postedTime}</p>




                    <label  onClick={()=>setModeal(phone)} htmlFor="my-modal-3" className="btn btn-outline  w-full text.lg ">Book Now</label>

                  
                     

                </div>




            </div>
        </div>
    );
};

export default PhoneCard;