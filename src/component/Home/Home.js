import React from 'react';
import AllPhones from '../AllPhones/AllPhones';
import ExtraSection from '../ExtraSecton/ExtraSection';
import Advertice from './Advertice/Advertice';
import Banner from './Banner/Banner';
import Brand from './BrandCatagories/Brand';
import FeatureBrand from './FeatureBrand/FeatureBrand';
import SubBanner from './SubBanner/SubBanner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeatureBrand/>
            <Brand/>
            <AllPhones/>
            <SubBanner/>
            <Advertice/>
            <ExtraSection/>
        </div>
    );
};

export default Home;