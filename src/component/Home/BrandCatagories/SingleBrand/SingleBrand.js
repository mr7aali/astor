import React from 'react';
import './SingleBrand.css'
const SingleBrand = ({b}) => {
    const {brandName,img}=b;
    return (
        <div className='singleBrandContainer'>
             <div className='brand-name max-w-screen-2xl mx-auto App mt-20'>
                <div className="card    w-96 bg-base-100 shadow-xl brand-img image-full">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">

                        <div className='single-brand'>
                            <h1>{brandName}</h1>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleBrand;