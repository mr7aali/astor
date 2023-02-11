import React from 'react';
import ExtraSection from '../ExtraSecton/ExtraSection';
import Advertice from './Advertice/Advertice';
import Banner from './Banner/Banner';
import Brand from './BrandCatagories/Brand';
import SubBanner from './SubBanner/SubBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Brand></Brand>
            <SubBanner/>
            <Advertice></Advertice>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;