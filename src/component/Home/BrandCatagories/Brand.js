import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDATA } from '../../../Redux/Thunk/fetchBrands'

import './Brand.css'
import SingleBrand from './SingleBrand/SingleBrand';
const Brand = () => {

    const dispatch = useDispatch();
    const Brands = useSelector((s) => s.product.Brands);
    const brandLoader = useSelector((s) => s.product.loader);


    useEffect(() => {
        // const url = 'http://localhost:5000/brand'
        dispatch(fetchDATA());
    }, [dispatch]);



    return (
        <div className='allbrand mb-20'>


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