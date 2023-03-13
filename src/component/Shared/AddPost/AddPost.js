import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddPost.css'
const AddPost = () => {
    const Brands = [{ value: 'iPhone', label: 'iPhone' }, { value: 'Samsung', label: 'Samsung' }, { value: 'Xiaomi', label: 'Xiaomi' }, { value: 'Other', label: 'Other' }];
    const condition = [{ value: 'Excellent', label: 'Excellent', }, { value: 'Good', label: 'Good', }, { value: 'Fair', label: 'Fair' }];
    const { register, reset, handleSubmit } = useForm();
    const [File, setFile] = useState(null);
    const getFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const handleSummition = data => {
        console.log(data);
    }
    return (
        //add-student-container
        <div style={{ border: '1px solid red' }} className='max-w-screen-xl grid grid-cols-2 mx-auto px-4  pt-20 pb-24'>


            <div>

            </div>

            <div>
                <div className='add-student-header'>
                    <h5>Add Student</h5>
                    <h4>2 Feb 2023</h4>

                </div>
                <form onSubmit={handleSubmit(handleSummition)}>
                    <div className='input-container'>
                        <div className='first-input-container'>
                            <TextField {...register('brandName')} id="outlined-basic" label="Name" variant="outlined" />
                            <TextField {...register('resalePrice')} id="outlined-basic" label="Resale Price" variant="outlined" />
                            <TextField  {...register('originalPrice')}  id="outlined-basic" label="Orginal Price" variant="outlined" />
                            <TextField {...register('mobileNumber')} id="outlined-basic" label="Mobile Number" variant="outlined" />




                            <TextField {...register('Brand')}  id="outlined-select-currency" select label="Brand"  >
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
                                    <input className='' type="file" id='uploadFile' onChange={getFile} accept='image/*' />

                                    <label htmlFor='uploadFile'>
                                        {
                                            File ?
                                                <img {...register('img')} className='' src={File} alt="" /> :
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
    );
};

export default AddPost;