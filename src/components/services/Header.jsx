import React from 'react';
import HeaderBG from "../../assets/images/services/header-image.jpg";

const Header = () => {
    return (
        <>
            <section className='xui-bg-sz-cover xui-bg-pos-center crednow-header' style={{backgroundImage: `url('${HeaderBG}')`}}>
                <div className='xui-py-12 xui-w-fluid-100 xui-h-fluid-100 xui-container'>
                    <h1 className='xui-lg-font-sz-300 xui-font-sz-180 color-active xui-font-w-400'>Our Services</h1>
                    <p className='xui-opacity-8 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-lg-font-sz-120 xui-font-sz-85'>Access a variety of loan options and credit services to meet your financial needs On <span className='color-active'>CredNow</span> App.</p>
                </div>
            </section>
        </>
    );
};

export default Header;