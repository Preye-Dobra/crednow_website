import React from 'react';
import Value from '../Value';
import Integrity from "../../assets/images/about/integrity.jpg";
import Innovation from "../../assets/images/about/innovation.jpg";
import CustomFocus from "../../assets/images/about/custom-focus.jpg";

const Values = () => {
    return (
        <section className='xui-py-1 xui-container'>
                <div className='xui-text-center'>
                    <h3 className='xui-font-sz-200 color-label xui-font-w-400'>Our Values</h3>
                    <p className='color-label xui-mt-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto xui-line-height-1-half'>Our commitment: Empowering you with simple, transparent, and accessible loans."</p>
                </div>
                <div className='xui-mt-2 xui-p-1 xui-bdr-white xui-bdr-s-solid xui-bdr-w-3 xui-bdr-rad-1'>
                    <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-2'>
                        <Value heading='Integrity' text='We uphold the highest standards of integrity in all our actions.' image={Integrity} />
                        <Value heading='Innovation' text='We are committed to continuous improvement and innovation.' image={Innovation} />
                        <Value heading='Customer Focus' text='We prioritize our clients’ needs and deliver exceptional service.' image={CustomFocus} />
                    </div>
                </div>
        </section>
    );
};

export default Values;
