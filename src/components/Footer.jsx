import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
import Playstore from "../assets/images/home/playstore.png";
import Appstore from "../assets/images/home/appstore.png";
import FooterPattern from "../assets/images/footer-pattern.png";
import Facebook from '../assets/custom-icons/Facebook';
import X from '../assets/custom-icons/X';
import Instagram from '../assets/custom-icons/Instagram';

const Footer = () => {
    return (
        <footer className='bg-label xui-text-white crednow-footer'>
            <div className='xui-row xui-container xui-pt-3'>
                <div className='xui-lg-col-5 xui-col-12'>
                    <img src={Logo} className='xui-img-150' alt="" />
                    <p className='xui-opacity-8 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-half'>At Crednow, we leverage cutting-edge technology to provide innovative financial solutions tailored to meet your unique needs.</p>
                </div>
                <div className='xui-lg-col-7 xui-col-12'>
                    <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <div>
                            <h3 className='xui-font-sz-150 xui-font-w-400 xui-opacity-8'>Quick Links</h3>
                            <ul className='xui-mt-1 xui-p-none'>
                                <li><Link to='/'>About Us</Link></li>
                                <li><Link to='/'>Our Services</Link></li>
                                <li><Link to='/'>Privacy Policy</Link></li>
                                <li><Link to='/'>Terms and Conditions</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='xui-font-sz-150 xui-font-w-400 xui-opacity-8'>Contact</h3>
                            <ul className='xui-mt-1 xui-p-none'>
                                <li><Link to='/'>+234 901 347 1329</Link></li>
                                <li><Link to='/'>support@crednow.com</Link></li>
                                <li><Link to='/'>38 Opebi Road, Ikeja, Lagos, Nigeria</Link></li>
                                <li><Link to='/'>Monday to Saturday, 9 AM - 5 PM WAT</Link></li>
                            </ul>
                        </div>
                        <div>
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
            <div className='xui-bg-sz-cover xui-py-3 xui-container footer-pattern' style={{backgroundImage: `url('${FooterPattern}')`}}>
                <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center footer-pattern-content'>
                    <p>Copyright@Crednow.2024. All rights reserved</p>
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                        <Link className='xui-text-dc-none' to={'/'} target='_blank'><Facebook /></Link>
                        <Link className='xui-text-dc-none' to={'/'} target='_blank'><X /></Link>
                        <Link className='xui-text-dc-none' to={'/'} target='_blank'><Instagram /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;