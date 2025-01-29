import React from 'react';
import Button from './Button';
import MoneyBag from "../assets/images/a-lot-of-money-on-investment-on-hand-free-vector.png";

const GetStarted = () => {
    return (
        <section className='bg-label xui-py-3 xui-px-1 xui-bdr-rad-1 xui-pos-relative'>
            <h3 className='xui-font-sz-150 xui-font-w-400'>Get Started Today</h3>
            <p className='xui-line-height-1-half xui-max-w-700 xui-w-fluid-100 xui-mt-half xui-opacity-8'>At CredNow, we believe in making your dreams a reality. Whether you're looking to finance a new home, start a business, or simply need some extra cash to cover unexpected expenses, we've got you covered. Our mission Is to provide fast, reliable, and transparent loan services that cater to your unique needs.</p>
            <div className='xui-mt-1'>
                <Button text='Get started' />
            </div>
            <img src={MoneyBag} className='xui-img-400 xui-pos-absolute' style={{top: '-100px', right: '0'}} alt="" />
        </section>
    );
};

export default GetStarted;