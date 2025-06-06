import React from 'react';
import Button from '../Button';
import FinanceTransform from "../../assets/images/about/finance-transform.png";

const Transformation = () => {
    return (
        <section className='xui-container xui-py-3'>
            <div className='xui-row xui-flex-ai-center xui-flex-dir-reverse-column'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <h3 className='xui-lg-font-sz-180 xui-font-sz-110 color-label xui-lg-font-w-400 xui-font-w-600 xui-lg-w-fluid-70 xui-w-fluid-80 xui-font-5'>Transforming Finance with Technology</h3>
                    <p className='color-label xui-font-5 xui-mt-1 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>Crednow is at the forefront of financial innovation. Founded with the vision of making financial services accessible and efficient, we combine expertise with advanced technology to offer personalized solutions. Whether you're looking to grow your wealth, manage your finances, or secure your future, we are here to help.</p>
                </div>
                <div className='xui-lg-col-6 xui-col-12'>
                    <img src={FinanceTransform} className='xui-lg-img-600 xui-img-350' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Transformation;