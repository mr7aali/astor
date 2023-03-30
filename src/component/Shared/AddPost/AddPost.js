import { Button, MenuItem, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddPost.css';
import { FaHourglassStart, FaStreetView } from "react-icons/fa";
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import { AuthContext } from '../../../contexts/AuthProvider';
import { useDispatch } from 'react-redux';
import { addPost_Thank } from '../../../Redux/Thunk/fetchBrands';

const AddPost = () => {
    const dispatch = useDispatch();
    const Brands = [{ value: 'iPhone', label: 'iPhone' }, { value: 'Samsung', label: 'Samsung' }, { value: 'Xiaomi', label: 'Xiaomi' }, { value: 'Other', label: 'Other' }];
    const condition = [{ value: 'Excellent', label: 'Excellent', }, { value: 'Good', label: 'Good', }, { value: 'Fair', label: 'Fair' }];
    const { register, reset, handleSubmit } = useForm();
    const [File, setFile] = useState(null);
    
    const getFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
       console.log(e.target.files[0]);
    }

    let showDate = new Date();
    let dateString = showDate.toDateString();
    const dateArray = dateString.split(" ");
    const date = dateArray[2] + " " + dateArray[1] + " " + dateArray[3];


    const { user } = useContext(AuthContext);
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


                if (imgData.success) {

                    const addProductData = {                        
                        name: data.brandName,
                        brandName: data.Brand,
                        picture: imgData.data.url,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        sellerName: user?.displayName,
                        sellerPhoto:user?.photoURL,
                        originalPrice: data.originalPrice,
                        yearsOfUse: data.yearsOfUse,
                        postedTime: date,
                        condition:data.condition,
                        sellerEmail:user?.email,
                        mobileNumber:data.mobileNumber,
                        isVerified: true
                    }  
                 
                   dispatch(addPost_Thank(addProductData,reset))           

                }
            })
    }



    return (

        <div  className='max-w-screen-xl flex flex-col  md:grid md:grid-cols-2 mx-auto px-4 pt-20 pb-24 '>

            <div  className='flex flex-col mb-12 md:justify-around'>
                <div >

                    <h1 className='text-[40px] text-[#000] font-bold'>Post an ad</h1>
                    <p className='text-[#000] text-[20px] font-thin'> Post your ad and keep track of it in your account.</p>

                </div>

                <div >
                    <div className='my-5'>
                        <span className='text-[#000] text-2xl md:text-4xl flex items-center font-thin'> <FaHourglassStart className='mr-3 text-[#0404ff]' /> Start posting your own ads.</span>
                    </div>
                    <div className='my-5'>
                        <span className='text-[#000] text-2xl md:text-4xl flex items-center font-thin'><BsFileEarmarkSpreadsheet className='mr-3 text-[#0404ff]' />  Mark ads as favorite and view them later.</span>
                    </div>
                    <div lassName='my-5'>
                        <span className='text-[#000] text-2xl md:text-4xl flex items-center font-thin'><FaStreetView className='mr-3 text-[#0404ff]' /> View and manage your ads at your convenience.</span>
                    </div>
                </div>


            </div>

            <div className='md:flex md:justify-center md:items-center'>
                <div>
                    <div className='add-student-header'>
                        <h5>Add your post</h5>
                        <h4 className='font-bold'>{date}</h4>

                    </div>
                    <form onSubmit={handleSubmit(handleAddproduct)}>
                        <div className='input-container'>
                            <div className='first-input-container'>
                                <TextField {...register('brandName')} id="outlined-basic" label="Name" variant="outlined" required/>
                                <TextField {...register('resalePrice')} id="outlined-basic" label="Resale Price" variant="outlined" required/>
                                <TextField  {...register('originalPrice')} id="outlined-basic" label="Orginal Price" variant="outlined" />
                                <TextField {...register('mobileNumber')} id="outlined-basic" label="Mobile Number" variant="outlined" required/>




                                <TextField {...register('Brand')} id="outlined-select-currency" select label="Brand"  required>
                                    {Brands.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField {...register('condition')} id="outlined-select-currency" select label="Condition" >
                                    {condition.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>


                            </div>

                            <div className=''>


                                <div className='grid grid-cols-2 mt-5 gap-3'>
                                    <TextField {...register('location')} id="outlined-basic" label="Address" variant="outlined" />

                                    <div className='row-span-2 from-img-container'>
                                        <input style={{
                                            zIndex:'-1'
                                        }} className='bg-[]' {...register('img')} type="file" id='uploadFile' onChange={getFile} accept='image/*' />

                                        <label htmlFor='uploadFile'>
                                            {
                                                File ?
                                                    <img  className='' src={File} alt="" /> :
                                                    <img className='' src='https://i.ibb.co/n6zD9sg/images.png' alt="" />
                                            }
                                        </label>
                                    </div>
                                    <TextField className='' {...register('yearsOfUse')} id="outlined-basic" label="Used (y)" variant="outlined" />
                                </div>

                                <div style={{ marginTop: '10px' }} className='grid'>


                                    <Button type='submit' className='from-button'>Submit Post</Button>
                                </div>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPost;