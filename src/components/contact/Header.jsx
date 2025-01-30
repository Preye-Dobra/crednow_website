import React, { useRef } from 'react';
import HeaderBG from "../../assets/images/abstract-white-and-blue-gradient-triangles-overlapping-background-free-vector.jpg";
import Phone from '../../assets/custom-icons/Phone';
import Mail from '../../assets/custom-icons/Mail';
import Location from '../../assets/custom-icons/Location';
import Calendar from '../../assets/custom-icons/Calendar';

const Header = () => {
    const name = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);
    const formData = {name: "", email: "", phone: "", subject: "", message: ""};
    const onSubmitHandler = (event) => {
        event.preventDefault();
        formData.name = name.current.value;
        formData.email = email.current.value;
        formData.phone = email.current.value;
        formData.subject = subject.current.value;
        formData.message = message.current.value;
        window.open("mailto:support@credilityfin.com?subject="+ formData.subject +"&body="+ encodeURI(formData.message));
    }
    return (
        <>
            <section className='xui-bg-sz-cover xui-bg-pos-center crednow-header' style={{backgroundImage: `url('${HeaderBG}')`}}>
                <div className='xui-py-12 xui-w-fluid-100 xui-h-fluid-100 xui-container' style={{backgroundColor: 'rgba(0, 71, 89, .8)'}}>
                    <h1 className='xui-lg-font-sz-300 xui-font-sz-180 color-active xui-font-w-400'>Contact Us</h1>
                    <p className='xui-opacity-8 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-lg-font-sz-120 xui-font-sz-85'>Have questions or need assistance? We’re here to help! Reach out to us via the following methods:</p>
                </div>
            </section>
            <section className='xui-mt--8'>
                <div className='xui-row crednow-contact-container xui-bg-white color-label xui-bdr-rad-1 xui-p-1'>
                    <div className='xui-lg-col-4 xui-col-12'>
                        <div className='bg-active xui-overflow-hidden crednow-contact-info xui-pos-relative xui-text-white xui-h-fluid-100 xui-bdr-rad-1 xui-p-1-half'>
                            <div className='xui-d-flex xui-flex-ai-center'>
                                <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <Phone />
                                </div>
                                <div className='xui-pl-half' style={{width: 'calc(100% - 30px)'}}>
                                    <p className='xui-font-sz-85'>+234 901 347 1329</p>
                                </div>
                            </div>
                            <div className='xui-d-flex xui-flex-ai-center xui-mt-1-half'>
                                <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <Mail />
                                </div>
                                <div className='xui-pl-half' style={{width: 'calc(100% - 30px)'}}>
                                    <p className='xui-font-sz-85'>support@crednow.com</p>
                                </div>
                            </div>
                            <div className='xui-d-flex xui-flex-ai-center xui-mt-1-half'>
                                <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <Location />
                                </div>
                                <div className='xui-pl-half' style={{width: 'calc(100% - 30px)'}}>
                                    <p className='xui-font-sz-85'>8 Opebi Road, Ikeja, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div className='xui-d-flex xui-flex-ai-center xui-mt-1-half'>
                                <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <Calendar />
                                </div>
                                <div className='xui-pl-half' style={{width: 'calc(100% - 30px)'}}>
                                    <p className='xui-font-sz-85'>Monday to Saturday, 9 AM - 5 PM WAT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xui-lg-col-8 xui-col-12 xui-lg-pl-1 xui-pl-none'>
                        <form className='xui-form crednow-contact-form xui-mt-1' onSubmit={onSubmitHandler}>
                            <div className='xui-d-grid xui-grid-col-2 xui-grid-gap-1'>
                                <div className="form-box">
                                    <label>Full Name</label>
                                    <input type="text" ref={name} id="name" placeholder='Please enter' className="xui-bdr-rad-2" required/>
                                </div>
                                <div className="form-box">
                                    <label>Email Address</label>
                                    <input type="email" ref={email} id="email" placeholder='Please enter' className="xui-bdr-rad-2" required/>
                                </div>
                                <div className="form-box">
                                    <label>Phone Number</label>
                                    <input type="tel" ref={phone} id="phone" placeholder='Please enter' className="xui-bdr-rad-2" required/>
                                </div>
                                <div className="form-box">
                                    <label>Subject</label>
                                    <input type="text" ref={subject} id="subject" placeholder='Please enter' className="xui-bdr-rad-2" required/>
                                </div>
                            </div>
                            <div className="form-box xui-mt-1">
                                <label>Message</label>
                                <textarea name="" ref={message} id="message" placeholder='Write your message here' className="xui-bdr-rad-1" required></textarea>
                            </div>
                            <div className="form-box">
                                <button type="submit" className="xui-btn xui-font-sz-85 xui-px-3 bg-active xui-bdr-rad-half xui-mt-1 xui-text-white">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;