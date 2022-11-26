import React from 'react';
import './Brand.css'
const Brand = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-20'> Brand <span className='text-primary'>Catagories</span></h1>

            {/* 
            <div className='brand-name max-w-screen-2xl mx-auto App'> */}
            {/* <div className='single-brand'>
                    <h1>Samsang</h1>
                </div> */}


            <div className='brand-name max-w-screen-2xl mx-auto App mt-20'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='single-brand'>
                            <h1>Samsang</h1>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Brand;