import React from 'react';
import Button from '../Button';
import WhatWeOfferImage from "../../assets/images/home/what-we-offer-image.png";

const WhatWeOffer = () => {
    return (
        <section className='xui-container xui-py-1'>
            <div className='xui-row xui-flex-ai-center xui-p-1-half what-we-do-holder xui-bdr-rad-half'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <h3 className='xui-lg-font-sz-180 xui-font-sz-120 color-label xui-font-w-400 xui-font-5'>What We Offer</h3>
                    <p className='color-label xui-font-5 xui-mt-1 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'> We offer a variety of loan types, including personal loans, business loans, and emergency loans, all customized to fit your unique requirements.Take the first step toward achieving your financial goals. Apply today and experience the ease and convenience of our loan and credit services</p>
                    <div className='xui-mt-1'>
                        <Button text='Get started' />
                    </div>
                </div>
                <div className='xui-lg-col-6 xui-col-12'>
                    <img src={WhatWeOfferImage} className='xui-img-600' alt="" />
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;