import React from 'react';
import Button from '../Button';
import WhatWeOfferImage from "../../assets/images/home/what-we-offer-image.png";

const WhatWeOffer = () => {
    return (
        <section className='xui-container xui-py-1'>
            <div className='xui-row xui-flex-ai-center xui-lg-p-1-half xui-p-none what-we-do-holder xui-bdr-rad-half'>
                <div className='xui-lg-col-6 xui-col-12 xui-lg-mt-none xui-mt-1-half'>
                    <h3 className='xui-lg-font-sz-180 xui-font-sz-110 color-label xui-lg-font-w-400 xui-font-w-600 xui-font-5'>What We Offer</h3>
                    <p className='color-label xui-font-5 xui-mt-1 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'> We offer a variety of loan types, including personal loans, business loans, and emergency loans, all customized to fit your unique requirements.Take the first step toward achieving your financial goals. Apply today and experience the ease and convenience of our loan and credit services</p>
                    <div className='xui-mt-1'>
                        <Button text='Get started' />
                    </div>
                </div>
                <div className='xui-lg-col-6 xui-col-12'>
                    <img src={WhatWeOfferImage} className='xui-lg-img-600 xui-img-200' alt="" />
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;