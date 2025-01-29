import React from 'react';
import Header from '../components/services/Header';
import LoanServices from '../components/services/LoanServices';
import Swirl from "../assets/images/services/swirl.png";
import CreditServices from '../components/services/CreditServices';

const Services = () => {
    return (
        <div>
            <Header />
            <LoanServices />
            <img src={Swirl} alt="" className='xui-img-200 xui-mx-auto' />
            <CreditServices />
        </div>
    );
};

export default Services;