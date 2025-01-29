import React from 'react';
import Header from '../components/home/Header';
import Mission from '../components/home/Mission';
import WhatWeOffer from '../components/home/WhatWeOffer';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Mission />
            <WhatWeOffer />
            <HowItWorks />
            <Testimonials />
        </div>
    );
};

export default Home;