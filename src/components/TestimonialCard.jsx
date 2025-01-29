import React from 'react';

const TestimonialCard = (props) => {
    const { text, initial, name } = props;
    return (
        <div className='ca-testimonial-card xui-text-center'>
            <p className='xui-font-sz-85 color-label xui-line-height-1-half'>{text}</p>
            <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                <div className='xui-w-40 xui-h-40 bg-main xui-font-sz-90 xui-mx-auto color-label xui-font-w-500 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>{initial}</div>
                <h3 className='color-label xui-font-w-500 xui-font-sz-90 xui-mt-1'>{name}</h3>
            </div>
        </div>
    );
};

export default TestimonialCard;