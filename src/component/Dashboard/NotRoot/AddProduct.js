import React from 'react';
import './Addproduct.css'
const AddProduct = () => {
    return (
        <div className='addproduct-div'>
            <h1 className='text-primary text-4xl font-bold text-center mb-10'>Add a product</h1>
            <div>



                <div className="form-control input-addproduct w-full max-w-xs">

                    
                                                   
                    <input  type="text" placeholder=" Type product name" className="input  input-bordered w-full " />       
                    <input  type="text" placeholder=" Type product name" className="input  input-bordered w-full " />       
                    <input  type="text" placeholder=" Type product name" className="input  input-bordered w-full " />       
                    <input  type="text" placeholder=" Type product name" className="input  input-bordered w-full " />       
                    <input  type="text" placeholder=" Type product name" className="input  input-bordered w-full " />  
                    <button type='submit' className="btn btn-outline w-full">Button</button>   



                </div>


            </div>
        </div>
    );
};

export default AddProduct;