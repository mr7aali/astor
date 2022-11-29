import React, { useContext } from 'react';
import './Addproduct.css'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const AddProduct = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/Dashboard/myproduct";

    let showDate = new Date();
    let dateString = showDate.toDateString();
    const dateArray = dateString.split(" ");
    const date = dateArray[2] + " " + dateArray[1] + " " + dateArray[3];


    const { user } = useContext(AuthContext);
    const { register, reset, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddproduct = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                //  console.log(imgData)
                if (imgData.success) {

                    const addProductData = {

                        
                        name: data.brandName,
                        brandName: data.Brand,
                        picture: imgData.data.url,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        sellerName: user?.displayName,
                        originalPrice: data.originalPrice,
                        yearsOfUse: data.yearsOfUse,
                        postedTime: date,
                        condition:data.condition,
                        sellerEmail:user?.email,
                        mobileNumber:data.mobileNumber,
                        isVerified: true


                    }
                   
                   
                    fetch('http://localhost:5000/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addProductData)

                    })
                        .then(res => res.json())
                        .then(data => {
                            
                            toast(`Added Successfully`)
                            reset();
                            navigate(from, { replace: true });
                        })



                }

            })
    }

    return (
        <div className='addproduct-div'>
            <h1 className='text-primary text-4xl font-bold text-center mb-10'>Add a product</h1>
            <div>



                <div className="form-control input-addproduct w-full max-w-xs">


                    <form onSubmit={handleSubmit(handleAddproduct)}>

                        <input type="text" {...register('brandName')} required placeholder=" Type product name" className="input  input-bordered w-full " />
                        <input type="text" {...register('resalePrice')} required placeholder=" Type resale price" className="input  input-bordered w-full " />
                        <input type="text" {...register('originalPrice')} required placeholder=" Type Original price" className="input  input-bordered w-full " />


                        <select {...register('condition')} className="select input-bordered w-full max-w-xs">

                            <option disabled selected>Condition</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>



                        <input {...register('mobileNumber')} type="text" placeholder="Type  mobile number" className="input  input-bordered w-full " />



                        {/* <select {...register('brandName')} className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Mobile Brand</option>
                            <option>Samsung</option>
                            <option>iPhone</option>
                            <option>Xiaomi</option>
                        </select> */}
                        <select {...register('Brand')} className="select input-bordered w-full max-w-xs">

                            <option disabled selected>Brand</option>
                            <option>Samsung</option>
                            <option>iPhone</option>
                            <option>Xiaomi</option>
                        </select>



                        <input {...register('location')} required type="text" placeholder=" Type location" className="input  input-bordered w-full " />

                        <input {...register('yearsOfUse')} required type="text" placeholder=" Type  year of use" className="input  input-bordered w-full " />
                        <h1 className='text-lg'>Put product image</h1>
                        <input {...register('img')} type="file" placeholder=" " className="input  input-bordered w-full " />
                        <button type='submit' className="btn btn-outline w-full">Button</button>
                    </form>



                </div>


            </div>
        </div>
    );
};

export default AddProduct;