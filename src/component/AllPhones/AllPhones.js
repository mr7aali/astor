import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchALL_Phone } from '../../Redux/Thunk/fetchBrands';

import PhoneCard from '../PhoneCard/PhoneCard';

const AllPhones = () => {
    const dispatch = useDispatch();
    const allphone = useSelector((s)=>s.product.allphone)
    


    useEffect(() => {
        const url = 'https://astor-server.vercel.app/allproduct';
       dispatch(fetchALL_Phone(url))
    }, [dispatch])
    return (
        <div className='bg-[#E2EFFB] '>

            <div>
                <h1 className='text-5xl text-[#000] font-bold text-center pt-10  '>Flash Deal </h1>
                <p className='text-xl text-center pt-10 text-[#000] mb-5'>Get Your Desired Product from Flash Deal !</p>
            </div>
            <div className='max-w-screen-xl mx-auto grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3'>

                {
                    allphone?.map(a =>
                        <PhoneCard
                            phone={a}
                            key={a._id}
                        />
                    )
                }

            </div>
        </div>
    );
};

export default AllPhones;