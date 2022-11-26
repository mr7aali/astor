import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../PhoneCard/PhoneCard';
import './Category.css'
const Category = () => {
    const phones = useLoaderData();
    console.log(phones)
console.log(phones)
    return (
        <div className='phone-container max-w-screen-2xl mx-auto '>
        {
            phones?.map(p=><PhoneCard
            key={p._id}
            phone={p}
            ></PhoneCard>)
        }
        </div>
    );
};

export default Category;