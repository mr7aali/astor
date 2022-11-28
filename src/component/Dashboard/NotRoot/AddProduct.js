import React from 'react';
import './Addproduct.css'
const AddProduct = () => {
    return (
        <div className='addproduct-div'>
            <h1 className='text-primary text-4xl font-bold text-center'>Add a product</h1>
            <div>



                <div className="form-control w-full max-w-xs">
                        <span className="label-text text-lg ">Product Name</span>                                   
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />       
                </div>


            </div>
        </div>
    );
};

export default AddProduct;