import React from 'react';
import AllPhones from '../AllPhones/AllPhones';
import ExtraSection from '../ExtraSecton/ExtraSection';
import Advertice from './Advertice/Advertice';
import Banner from './Banner/Banner';
import Brand from './BrandCatagories/Brand';
import FeatureBrand from './FeatureBrand/FeatureBrand';
import GetDailyOffer from './GetDailyOffer/GetDailyOffer';
import SubBanner from './SubBanner/SubBanner';

const Home = () => {
    return (
        <div>
            <SubBanner/>
            <FeatureBrand/>
            <Brand/>
            <Banner/>
            <AllPhones/>
            <ExtraSection/>
            <Advertice/>
            <GetDailyOffer/>
        </div>
    );
};

export default Home;