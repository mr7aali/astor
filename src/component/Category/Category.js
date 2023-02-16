import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Modeal from '../Mdeal/Modeal';
import PhoneCard from '../PhoneCard/PhoneCard';

import './Category.css'
const Category = () => {
    const phones = useLoaderData();
    const { modeal } = useContext(AuthContext);
    console.log(phones[0].brandName);

    return (
        <div className='bg-[#E2EFFB] pb-20'>
            <div>
                <h1 className='text-5xl text-[#000] font-bold text-center pt-10  '> Deal with {phones[0].brandName} </h1>
                <p className='text-xl text-center pt-10 pb-10 text-[#000]'>Get Your Desired Product from Astor !</p>
            </div>

            <div className='phone-container max-w-screen-2xl mx-auto '>
                {
                    phones?.map(p => <PhoneCard
                        key={p._id}
                        phone={p}
                    ></PhoneCard>)
                }

                <Modeal
                    modealData={modeal}
                ></Modeal>

            </div>
        </div>

    );
};

export default Category;