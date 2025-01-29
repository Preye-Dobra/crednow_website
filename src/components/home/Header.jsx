import React from 'react';
import HeaderImage from "../../assets/images/home/header-image.png";
import HeaderBG from "../../assets/images/abstract-white-and-blue-gradient-triangles-overlapping-background-free-vector.jpg";
import { Link } from 'react-router-dom';
import Playstore from "../../assets/images/home/playstore.png";
import Appstore from "../../assets/images/home/appstore.png";

const Header = () => {
    return (
        <>
            <section className='xui-bg-sz-cover xui-bg-pos-center crednow-header' style={{backgroundImage: `url('${HeaderBG}')`}}>
                <div className='crednow-container xui-row xui-w-fluid-100 xui-h-fluid-100 xui-py-12 xui-container xui-z-index-1 xui-pos-relative' style={{backgroundColor: 'rgba(0, 71, 89, .8)'}}>
                    <div className='xui-lg-col-7 xui-col-12 crednow-header-left'>
                        <p className='xui-font-sz-75 xui-opacity-8 xui-lg-d-block xui-d-none'>Welcome to Crednow - Empowering Your Financial Future</p>
                        <h1 className='xui-lg-font-sz-300 xui-font-sz-180 color-active xui-font-w-400'>Quickest and Most Convenient Way to Get a Loan</h1>
                        <p className='xui-opacity-8 xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-lg-font-sz-120 xui-font-sz-85'>At Crednow, we leverage cutting-edge technology to provide innovative financial solutions tailored to meet your unique needs. </p>
                        <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1'>
                            <Link to={'/'} target='_blank' className='xui-d-inline-block'>
                                <img src={Playstore} alt="" className='xui-img-150' />
                            </Link>
                            <Link to={'/'} target='_blank' className='xui-d-inline-block'>
                                <img src={Appstore} alt="" className='xui-img-150' />
                            </Link>
                        </div>
                    </div>
                    <img src={HeaderImage} className='xui-img-450' alt="" />
                    {/* <div className='xui-lg-col-5 xui-col-12 xui-pl-1-half'>
                        <img src={HeaderImage} className='xui-img-450' alt="" />
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Header;