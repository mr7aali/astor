import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';

const AllPhones = () => {

    const { data: allphone = [] } = useQuery({
        queryKey: ['allphone'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allproduct');
            const data = await res.json();
            return data;
        }

    })
    console.log(allphone);



    return (
        <div className='bg-[#E2EFFB] '>

            <div>
                <h1 className='text-5xl text-[#000] font-bold text-center pt-10  '>Flash Deal  </h1>
                <p className='text-xl text-center pt-10 text-[#000] mb-5'>Get Your Desired Product from Flash Deal !</p>
            </div>
            <div className='max-w-screen-xl mx-auto grid grid-cols-3'>
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