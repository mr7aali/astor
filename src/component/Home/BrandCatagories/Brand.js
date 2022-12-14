import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Brand.css'
import SingleBrand from './SingleBrand/SingleBrand';
const Brand = () => {
    const [Brands, setBrand] = useState(null);
    const [brandLoader, SetBrandLoader] = useState(true);
    useEffect(() => {
        fetch('https://astor-server.vercel.app/brand')
            .then(res => res.json())
            .then(data => {
                setBrand(data);
                SetBrandLoader(false);
            })
    }, [])


    return (
        <div className='allbrand'>
            {/* <h1 className='text-5xl text-center font-bold mt-20 mb-10'> Brand <span className='text-primary'>Catagories</span></h1> */}
            <div className='brand-container max-w-screen-2xl mx-auto '>

                {
                    brandLoader && <progress className="progress w-56 mt-32"></progress>
                }

                {

                    Brands?.map(b => <Link to={`/category/${b._id}`} key={b._id}>
                        <div className='single-Brand-container'>
                            <SingleBrand

                                b={b}
                            ></SingleBrand>

                        </div>
                    </Link>)


                }


            </div>

        </div>
    );
};

export default Brand;