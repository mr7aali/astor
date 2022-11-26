import React, { useEffect, useState } from 'react';
import './Brand.css'
import SingleBrand from './SingleBrand/SingleBrand';
const Brand = () => {
const [Brands,setBrand]=useState(null);


 
 

useEffect(()=>{
    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>setBrand(data))
},[])


    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-20'> Brand <span className='text-primary'>Catagories</span></h1>

           {
            Brands?.map(b=><SingleBrand
            key={b.id}
            b={b}
            ></SingleBrand>)
           }



        </div>
    );
};

export default Brand;