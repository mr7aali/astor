import React from 'react';
import './PhoneCard.css'
const PhoneCard = ({ phone,setModeal }) => {
    const { brandName, _id, location, name, originalPrice, picture, postedTime, resalePrice, sellerName, yearsOfUse } = phone;
    return (
        <div className='single-phone'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='single-phone-img' src={picture} alt="Shoes" /></figure>


                <div className="card-body">


                    <h2 className="card-title text-primary text-2xl">{name}</h2>
                    <p>Original Price: {originalPrice}$</p>
                    <p>Asking Price: {resalePrice}$</p>
                    <p>Used: {yearsOfUse} y</p>
                    <p>Seller Name: {sellerName}</p>
                    <p>Post On {postedTime}</p>




                    <label onClick={()=>setModeal(phone)} htmlFor="my-modal-3" className="btn btn-outline  w-full text.lg ">Book Now</label>


                    

                </div>




            </div>
        </div>
    );
};

export default PhoneCard;