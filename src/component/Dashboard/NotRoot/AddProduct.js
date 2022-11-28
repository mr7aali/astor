import React from 'react';
import './Addproduct.css'
const AddProduct = () => {

    return (
        <div className='addproduct-div'>
            <h1 className='text-primary text-4xl font-bold text-center mb-10'>Add a product</h1>
            <div>



                <div className="form-control input-addproduct w-full max-w-xs">


                    <form action="">

                        <input type="text" required placeholder=" Type product name" className="input  input-bordered w-full " />
                        <input type="text" required placeholder=" Type product price" className="input  input-bordered w-full " />
                        <select className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Condition</option>
                            <option>One Piece</option>
                            <option>Naruto</option>
                            <option>Death Note</option>
                           
                        </select>
                        <input type="text" placeholder="Type  mobile number" className="input  input-bordered w-full " />
                        <select className="select input-bordered w-full max-w-xs" required>
                            <option disabled selected>Condition</option>
                            <option>Samsung</option>
                            <option>iPhone</option>
                            <option>Xiaomi</option>
                            
                           
                        </select>
                        <input required type="text" placeholder=" Type location" className="input  input-bordered w-full " />
                        
                        <input required type="text" placeholder=" Type  year of use" className="input  input-bordered w-full " />
                        <h1 className='text-lg'>Put product image</h1>
                        <input required type="file" placeholder=" " className="input  input-bordered w-full " />
                        <button type='submit' className="btn btn-outline w-full">Button</button>
                    </form>



                </div>


            </div>
        </div>
    );
};

export default AddProduct;