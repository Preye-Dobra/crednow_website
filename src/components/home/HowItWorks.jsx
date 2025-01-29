import React from 'react';
import Button from '../Button';
import HowItWorksImage from "../../assets/images/home/how-it-works-image.png";
import MedicalService from '../../assets/custom-icons/MedicalService';
import ApprovedTag from '../../assets/custom-icons/ApprovedTag';
import SolarMoney from '../../assets/custom-icons/SolarMoney';
import Stats from '../../assets/custom-icons/Stats';

const HowItWorks = () => {
    return (
        <section className='xui-container xui-py-3'>
            <h3 className='xui-lg-font-sz-200 xui-font-sz-150 color-label xui-lg-font-w-400 xui-font-w-600 xui-text-center'>How it works?</h3>
            <div className='xui-row xui-flex-ai-center xui-mt-2'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <img src={HowItWorksImage} className='xui-lg-img-500 xui-img-200 xui-lg-mx-none xui-mx-auto' alt="" />
                </div>
                <div className="xui-lg-col-6 xui-col-12 xui-lg-mt-none xui-mt-1-half">
                    <div className="benefits-holder">
                        <div className="benefit-left">
                            <span className='xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <MedicalService />
                            </span>
                        </div>
                        <div className="benefit-right">
                            <h3 className='xui-font-sz-110 color-label xui-lg-font-w-500 xui-font-w-600'>Apply Online</h3>
                            <p className='color-label xui-font-5 xui-mt-half xui-line-height-1-half'>  Fill out our simple online application form on playstore with your details and loan requirements.</p>
                            {/* <p className="xui-lg-font-sz-110 xui-font-sz-85 xui-m-none xui-opacity-8">Make trades with no commissions and no minimum balance.</p> */}
                        </div>
                    </div>
                    <div className="benefits-holder">
                        <div className="benefit-left">
                            <span className='xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <ApprovedTag />
                            </span>
                        </div>
                        <div className="benefit-right">
                            <h3 className='xui-font-sz-110 color-label xui-lg-font-w-500 xui-font-w-600'>Get Approved</h3>
                            <p className='color-label xui-font-5 xui-mt-1'>Our team will review your application automatically and get back to you on the App with a decision quickly.</p>
                            {/* <p className="xui-lg-font-sz-110 xui-font-sz-85 xui-m-none xui-opacity-8">Make trades with no commissions and no minimum balance.</p> */}
                        </div>
                    </div>
                    <div className="benefits-holder">
                        <div className="benefit-left">
                            <span className='xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <SolarMoney />
                            </span>
                        </div>
                        <div className="benefit-right">
                            <h3 className='xui-font-sz-110 color-label xui-lg-font-w-500 xui-font-w-600'>Receive Funds</h3>
                            <p className='color-label xui-font-5 xui-mt-1'> Once approved, the funds will be disbursed to your account promptly, so you can start using them right away.</p>
                            {/* <p className="xui-lg-font-sz-110 xui-font-sz-85 xui-m-none xui-opacity-8">Make trades with no commissions and no minimum balance.</p> */}
                        </div>
                    </div>
                    <div className="benefits-holder">
                        <div className="benefit-left">
                            <span className='xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <Stats />
                            </span>
                        </div>
                        <div className="benefit-right">
                            <h3 className='xui-font-sz-110 color-label xui-lg-font-w-500 xui-font-w-600'>Repay Easily</h3>
                            <p className='color-label xui-font-5 xui-mt-1'>Enjoy flexible repayment options that fit your budget. We offer multiple payment options on the App for your convenience.</p>
                            {/* <p className="xui-lg-font-sz-110 xui-font-sz-85 xui-m-none xui-opacity-8">Make trades with no commissions and no minimum balance.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;