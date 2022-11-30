import React from 'react';
import ExtraSection from '../ExtraSecton/ExtraSection';
import Advertice from './Advertice/Advertice';
import Banner from './Banner/Banner';
import Brand from './BrandCatagories/Brand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <ExtraSection></ExtraSection>
            <Advertice></Advertice>
        </div>
    );
};

export default Home;