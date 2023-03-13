import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPost.css'
const AddPost = () => {
    const Brands = [{ value: 'iPhone', label: 'iPhone'},{value: 'Samsung', label: 'Samsung' },{value: 'Xiaomi', label: 'Xiaomi' } ,{value: 'Other', label: 'Other' } ];
    const condition = [  { value: 'Excellent', label: 'Excellent', },{ value: 'Good', label: 'Good', },{ value: 'Fair', label: 'Fair' }];
    const { register, reset, handleSubmit } = useForm();
    const handleSummition = data => {
        console.log(data);
        const final_data = { ...data, Email: "admin@gmail.com" }
        fetch('https://resolute-ai-software-server.vercel.app/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(final_data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
            })


    }
    return (
        //add-student-container
        <div className='max-w-screen-xl	mx-auto grid  pt-20 pb-24'>
            <div className='add-student-header'>
                <h5>Add Student</h5>
                <h4>2 Feb 2023</h4>

            </div>
            <form onSubmit={handleSubmit(handleSummition)}>
                <div className='input-container'>
                    <div className='first-input-container'>
                        <TextField  {...register("first_name")} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField {...register("middle_name")} id="outlined-basic" label="Resale Price" variant="outlined" />
                        <TextField {...register("last_name")} id="outlined-basic" label="Orginal Price" variant="outlined" />



                        <TextField {...register("Class")} id="outlined-select-currency" select label="Brand"  >
                            {Brands.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField {...register("Division")} id="outlined-select-currency" select label="Select Division" >
                            {condition.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField {...register("Roll")} id="outlined-basic" label="Mobile Number" variant="outlined" />
                    </div>

                    <div className='second-input-container'>
                        <div className='address-input-container'>
                            <TextField {...register("address1")} id="outlined-basic" label="Address Line 1" variant="outlined" />
                            <input type="file" />
                        </div>
                        <div style={{ marginTop: '15px' }} className='first-input-container'>
                            <TextField {...register("Landmark")} id="outlined-basic" label="Landmark" variant="outlined" />
                            <TextField {...register("City")} id="outlined-basic" label="City" variant="outlined" />
                            <TextField {...register("Pincode")} id="outlined-basic" label="Pincode" variant="outlined" />
                            <Button type='submit'  className='from-button'>Add Student</Button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddPost;