import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Modeal from '../Mdeal/Modeal';
import PhoneCard from '../PhoneCard/PhoneCard';

import './Category.css'
const Category = () => {
    const phones = useLoaderData();
   const {modeal}=useContext(AuthContext);
   console.log(phones);
    
    return (
        <div className='phone-container max-w-screen-2xl mx-auto '>
        {
            phones?.map(p=><PhoneCard
            key={p._id}
            phone={p}
            ></PhoneCard>)
        }

        <Modeal
        modealData={modeal}
        ></Modeal> 
       
        </div>
    );
};

export default Category;