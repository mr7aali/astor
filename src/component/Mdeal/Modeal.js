import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import './Modeal.css';
import { useForm } from "react-hook-form";

import { toast } from 'react-toastify';
import PrivetRout from '../PrivetRout/PrivetRout';
const Modeal = ({ modealData,refetch  }) => {
    const { user } = useContext(AuthContext);
    


    const { register, handleSubmit, reset } = useForm();




    const handleDelet=(email,price)=>{
        fetch(`http://localhost:5000/deleteAddvertise?email=${email}&price=${price}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            refetch();

        })
    }





    const hadleStutaus = (email, price) => {
        fetch(`http://localhost:5000/updateproductstatus?email=${email}&price=${price}`, {
            method: 'PUT'
        })
            .then(res => res.json())
          .then(data => console.log(data))

    }
    const handleModeal = data => {

        const bookingDetails = {
            bookedIteam: modealData?.name,
            UserName: user?.displayName,
            Email: user?.email,
            picture: modealData?.picture,
            price: modealData?.resalePrice,
            address: data.address,
            sellerEmail: modealData.sellerEmail,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast(`${modealData?.name} Booked Successfully `)
                reset();
                ////////////i have to update data status////////////
                hadleStutaus(modealData.sellerEmail, modealData.resalePrice);
                //..........
                handleDelet(modealData.sellerEmail, modealData.resalePrice);
            })

    }
    //onClick={()=>hadleStutaus(modealData.sellerEmail)}

    return (
        <PrivetRout>
            <div>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold text-center m-5">Model <span>{modealData?.name}</span></h3>


                        <form onSubmit={handleSubmit(handleModeal)}>

                            <div className='nameFild'>
                                <input {...register("UserName")} type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-5/12 font-bold " />
                                <input {...register("Email")} type="text" disabled defaultValue={user?.email} className="input input-bordered w-1/2  font-bold " />
                            </div>

                            <div className='nameFild mt-5'>
                                <input {...register("BookingPrice")} type="text" disabled value={modealData?.resalePrice + " $"} className="input input-bordered mr-5 w-1/3" />
                                <input {...register("Mobile")} type="text" placeholder="Type here your  number" className="input input-bordered w-full " required />
                            </div>

                            <input {...register("address")} type="text" placeholder=" type your preferable address" className="input input-bordered w-full mt-5" required />

                            <div className='mt-5 text-center w-full'>
                                <button className="btn btn-outline w-full ">Click For Book</button>
                            </div>
                        </form>



                    </div>

                </div>
            </div>
        </PrivetRout>
    );
};

export default Modeal;