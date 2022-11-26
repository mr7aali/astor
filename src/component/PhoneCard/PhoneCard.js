import React from 'react';
import './PhoneCard.css'
const PhoneCard = ({ phone }) => {
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

                        <button className="btn btn-outline mt-2 w-full text-xl">Book Now</button>

                        
                        


                    </div>
                  



            </div>
        </div>
    );
};

export default PhoneCard;