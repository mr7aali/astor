import React from 'react';
import AllPhones from '../AllPhones/AllPhones';
import ExtraSection from '../ExtraSecton/ExtraSection';
import Advertice from './Advertice/Advertice';
import Banner from './Banner/Banner';
import Brand from './BrandCatagories/Brand';
import FeatureBrand from './FeatureBrand/FeatureBrand';
import TemporaryDrawer from './SideCart/SideCart';
import SubBanner from './SubBanner/SubBanner';

const Home = () => {
    return (
        <div>
            <SubBanner/>
            <FeatureBrand/>
            <TemporaryDrawer/>
            <Brand/>
            <Banner/>
            <AllPhones/>
            <Advertice/>
            <ExtraSection/>
        </div>
    );
};

export default Home;