import React from 'react';
import NairaNote from "../../assets/images/services/new-Naira-notes.png";

const CreditServices = () => {
    return (
        <section className='xui-container xui-lg-py-3 xui-py-1'>
            <div className='xui-row xui-flex-ai-center xui-flex-dir-reverse-column'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <h3 className='xui-lg-font-sz-180 xui-font-sz-110 color-label xui-lg-font-w-400 xui-font-w-600 xui-lg-w-fluid-70 xui-w-fluid-100 xui-font-5'>Credit Services</h3>
                    <p className='color-label xui-font-5 xui-mt-1 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>We are dedicated to responsible lending practices. Our loans are designed to empower you without creating undue financial burden. Please borrow responsibly and ensure you understand the terms and conditions before applying.</p>
                </div>
                <div className='xui-lg-col-6 xui-col-12'>
                    <img src={NairaNote} className='xui-img-600' alt="" />
                </div>
            </div>
        </section>
    );
};

export default CreditServices;