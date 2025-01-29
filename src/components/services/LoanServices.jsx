import React from 'react';
import LoanImage from "../../assets/images/services/Leadway-Money-Boss.png";

const LoanServices = () => {
    return (
        <section className='xui-container xui-py-3'>
            <div className='xui-row xui-flex-ai-center'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <img src={LoanImage} className='xui-img-600' alt="" />
                </div>
                <div className='xui-lg-col-6 xui-col-12 xui-lg-pl-2 xui-pl-none xui-lg-mt-none xui-mt-1-half'>
                    <h3 className='xui-lg-font-sz-180 xui-font-sz-110 color-label xui-lg-font-w-400 xui-font-w-600 xui-lg-w-fluid-70 xui-w-fluid-100 xui-font-5'>Loan Services</h3>
                    <p className='color-label xui-font-5 xui-mt-1 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>At Crednow, we are committed to providing fast, reliable, and flexible financial solutions to meet your needs. Whether you're looking to fund a business idea, cover unexpected expenses, or achieve a personal goal, our loan and credit services are tailored to help you succeed.</p>
                </div>
            </div>
        </section>
    );
};

export default LoanServices;