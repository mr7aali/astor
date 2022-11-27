import React, { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Modeal from '../Mdeal/Modeal';
import PhoneCard from '../PhoneCard/PhoneCard';
import './Category.css'
const Category = () => {
    const phones = useLoaderData();
    const [modeal,setModeal]= useState(null);
   

    
    return (
        <div className='phone-container max-w-screen-2xl mx-auto '>
        {
            phones?.map(p=><PhoneCard
            key={p._id}
            phone={p}
            setModeal={setModeal}
            ></PhoneCard>)
        }
        <Modeal
        modealData={modeal}
        ></Modeal>
        </div>
    );
};

export default Category;