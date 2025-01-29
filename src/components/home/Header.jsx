import React, { useEffect, useState } from 'react';
import HeaderBG from "../../assets/images/home/header-image.jpg";
import HeaderBGMobile from "../../assets/images/home/header-image-mobile.jpg";
import { Link } from 'react-router-dom';
import Playstore from "../../assets/images/home/playstore.png";
import Appstore from "../../assets/images/home/appstore.png";

const Header = () => {
    const [backgroundImage, setBackgroundImage] = useState(HeaderBG);

    useEffect(() => {
        const updateBackground = () => {
            setBackgroundImage(window.innerWidth <= 768 ? HeaderBGMobile : HeaderBG);
        };

        updateBackground();
        window.addEventListener('resize', updateBackground);

        return () => window.removeEventListener('resize', updateBackground);
    }, []);
    return (
        <>
            <section className='xui-bg-sz-cover xui-bg-pos-right crednow-header home' style={{backgroundImage: `url('${backgroundImage}')`}}>
                <div className='crednow-container xui-w-fluid-100 xui-h-fluid-100 xui-py-12 xui-container'>
                    <p className='xui-font-sz-75 xui-opacity-8 xui-lg-d-block xui-d-none'>Welcome to Crednow - Empowering Your Financial Future</p>
                    <h1 className='xui-lg-font-sz-300 xui-font-sz-180 xui-lg-w-fluid-60 xui-w-fluid-100 color-active xui-font-w-400'>Quickest and Most Convenient Way to Get a Loan</h1>
                    <p className='xui-opacity-8 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-lg-font-sz-120 xui-font-sz-85'>At Crednow, we leverage cutting-edge technology to provide innovative financial solutions tailored to meet your unique needs. </p>
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1'>
                        <Link to={'/'} target='_blank' className='xui-d-inline-block'>
                            <img src={Playstore} alt="" className='xui-img-150' />
                        </Link>
                        <Link to={'/'} target='_blank' className='xui-d-inline-block'>
                            <img src={Appstore} alt="" className='xui-img-150' />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;