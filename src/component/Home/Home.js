import React from 'react';
import Advertice from './Advertice/Advertice';
import Banner from './Banner/Banner';
import Brand from './BrandCatagories/Brand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Advertice></Advertice>
        </div>
    );
};

export default Home;