import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import Playstore from "../assets/images/home/playstore.png";
import Appstore from "../assets/images/home/appstore.png";
import FooterPattern from "../assets/images/footer-pattern.png";
import FooterPatternMobile from "../assets/images/mobile-footer-pattern.png"; // Mobile version
import Facebook from '../assets/custom-icons/Facebook';
import X from '../assets/custom-icons/X';
import Instagram from '../assets/custom-icons/Instagram';
import Phone from '../assets/custom-icons/Phone';
import Mail from '../assets/custom-icons/Mail';
import Location from '../assets/custom-icons/Location';
import Calendar from '../assets/custom-icons/Calendar';

const Footer = () => {
    const [backgroundImage, setBackgroundImage] = useState(FooterPattern);

    useEffect(() => {
        const updateBackground = () => {
            setBackgroundImage(window.innerWidth <= 768 ? FooterPatternMobile : FooterPattern);
        };

        updateBackground();
        window.addEventListener('resize', updateBackground);

        return () => window.removeEventListener('resize', updateBackground);
    }, []);

    return (
        <footer className='bg-label xui-text-white crednow-footer'>
            <div className='xui-row xui-container xui-lg-pt-3 xui-pt-1-half'>
                <div className='xui-lg-col-5 xui-col-12'>
                    <img src={Logo} className='xui-img-150' alt="" />
                    <p className='xui-opacity-8 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-half'>At Crednow, we leverage cutting-edge technology to provide innovative financial solutions tailored to meet your unique needs.</p>
                </div>
                <div className='xui-lg-col-7 xui-col-12 xui-lg-mt-none xui-mt-1-half'>
                    <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <div>
                            <h3 className='xui-lg-font-sz-150 xui-font-sz-120 xui-lg-font-w-400 xui-font-w-500 xui-opacity-8'>Quick Links</h3>
                            <ul className='xui-mt-1 xui-p-none'>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/services'>Our Services</Link></li>
                                <li><Link to='/'>Privacy Policy</Link></li>
                                <li><Link to='/'>Terms and Conditions</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='xui-lg-font-sz-150 xui-font-sz-120 xui-lg-font-w-400 xui-font-w-500 xui-opacity-8'>Contact</h3>
                            <div className='xui-mt-1'>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <Phone />
                                    </div>
                                    <div className='xui-pl-half' style={{ width: 'calc(100% - 30px)' }}>
                                        <p className='xui-opacity-8 xui-font-sz-85'>+234 901 347 1329</p>
                                    </div>
                                </div>
                                <div className='xui-d-flex xui-flex-ai-center xui-mt-1-half'>
                                    <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <Mail />
                                    </div>
                                    <div className='xui-pl-half' style={{ width: 'calc(100% - 30px)' }}>
                                        <p className='xui-opacity-8 xui-font-sz-85'>support@crednow.ng</p>
                                    </div>
                                </div>
                                <div className='xui-d-flex xui-flex-ai-center xui-mt-1-half'>
                                    <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <Location />
                                    </div>
                                    <div className='xui-pl-half' style={{ width: 'calc(100% - 30px)' }}>
                                        <p className='xui-opacity-8 xui-font-sz-85'>38 Opebi Road, Ikeja, Lagos, Nigeria</p>
                                    </div>
                                </div>
                                <div className='xui-d-flex xui-flex-ai-center xui-mt-1-half'>
                                    <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <Calendar />
                                    </div>
                                    <div className='xui-pl-half' style={{ width: 'calc(100% - 30px)' }}>
                                        <p className='xui-opacity-8 xui-font-sz-85'>Monday to Saturday, 9 AM - 5 PM WAT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xui-d-flex xui-flex-dir-column'>
                            <Link to={'/'} target='_blank' className='xui-d-inline-block'>
                                <img src={Appstore} alt="" className='xui-img-150' />
                            </Link>
                            <Link to={'/'} target='_blank' className='xui-d-inline-block xui-mt-half'>
                                <img src={Playstore} alt="" className='xui-img-150' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xui-bg-sz-cover xui-py-3 xui-container footer-pattern' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center footer-pattern-content'>
                    <p className='xui-opacity-8 xui-lg-font-sz-85 xui-font-sz-65'>Copyright@Crednow.2024. All rights reserved</p>
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                        <Link className='xui-text-dc-none' to={'https://web.facebook.com/CredNow.ng'} target='_blank'><Facebook /></Link>
                        {/* <Link className='xui-text-dc-none' to={'/'} target='_blank'><X /></Link> */}
                        <Link className='xui-text-dc-none' to={'https://www.instagram.com/credn.ow/'} target='_blank'><Instagram /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
