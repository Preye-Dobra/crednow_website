import React, { useRef, useState } from 'react';
import HeaderBG from "../../assets/images/abstract-white-and-blue-gradient-triangles-overlapping-background-free-vector.jpg";
import Phone from '../../assets/custom-icons/Phone';
import Mail from '../../assets/custom-icons/Mail';
import Location from '../../assets/custom-icons/Location';
import Calendar from '../../assets/custom-icons/Calendar';
import ErrorAlert from '../alerts/Error';
import SuccessAlert from '../alerts/Success';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Header = () => {
    const { handleSubmit, register, formState: { errors, isValid }, reset } = useForm();
    const [validationErrMsg, setValidationErrMsg] = useState('');
    const [successErrMsg, setSuccessErrMsg] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const sendEmail = handleSubmit(async (data) => {
        setIsDisabled(true);
        const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
    
        const messagePayload = {
            email: data.email,
            attributes: {
                firstName: data.firstName,
                lastName: data.lastName,
            },
            emailBlacklisted: false,
            smsBlacklisted: false,
            listIds: [6], // Adjust the list ID as needed
            updateEnabled: false,
        };
    
        const emailOptions = {
            sender: {
                name: "Crednow Team",
                email: "support@crednow.ng",
            },
            to: [
                {
                    email: data.email,
                    name: `${data.firstName} ${data.lastName}`,
                },
            ],
            subject: "Thank You for Contacting Crednow!",
            htmlContent: `
                <!DOCTYPE html>
                <html>
                <body>
                    <h1>Welcome to Crednow!</h1>
                    <p>Dear ${data.firstName},</p>
                    <p>Thank you for reaching out to us. Our team will get back to you as soon as possible.</p>
                    <p>Best regards,<br>The Crednow Team</p>
                </body>
                </html>
            `,
        };
    
        try {
            // Send contact to Brevo
            const brevoContactRes = await axios.post(
                "https://api.brevo.com/v3/contacts",
                messagePayload,
                {
                    headers: {
                        "api-key": BREVO_API_KEY,
                        "Content-Type": "application/json",
                    },
                }
            );
    
            if (brevoContactRes.status === 201) {
                // Send email via Brevo
                await axios.post(
                    "https://api.brevo.com/v3/smtp/email",
                    emailOptions,
                    {
                        headers: {
                            "api-key": BREVO_API_KEY,
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(brevoContactRes);
                setSuccessErrMsg("Your message has been sent successfully");
                window.xuiAnimeStart('successAlert');
                setTimeout(() => {
                    window.xuiAnimeEnd('successAlert');
                    reset();
                }, 3200);
            }
        } catch (error) {
            console.error("Brevo error:", error);
            setValidationErrMsg(error.response?.data?.message || "An error occurred. Please try again.");
            window.xuiAnimeStart('errorAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('errorAlert');
            }, 3200);
        } finally {
            setIsDisabled(false);
        }
    });
    
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
                                    <p className='xui-font-sz-85'>support@crednow.ng</p>
                                </div>
                            </div>
                            <div className='xui-d-flex xui-flex-ai-center xui-mt-1-half'>
                                <div className='xui-w-30 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <Location />
                                </div>
                                <div className='xui-pl-half' style={{width: 'calc(100% - 30px)'}}>
                                    <p className='xui-font-sz-85'>38 Opebi Road, Ikeja, Lagos, Nigeria</p>
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
                        <form className='xui-form crednow-contact-form xui-mt-1' onSubmit={handleSubmit(sendEmail)} autoComplete="off" noValidate>
                            <div className='xui-d-grid xui-grid-col-2 xui-grid-gap-1'>
                                <div className="form-box">
                                    <label>Full Name</label>
                                    <input {...register('name', {required: "This field is required"})} type="text" id="name" placeholder='Please enter' className="xui-bdr-rad-2" required/>
                                    {errors.name && <span className="xui-badge xui-badge-danger xui-d-block xui-w-fluid-100 xui-bdr-rad-2 xui-lg-font-sz-90 xui-font-sz-80 xui-mt-1">{errors.name.message}</span>}
                                </div>
                                <div className="form-box">
                                    <label>Email Address</label>
                                    <input {...register('email', {required: 'Please enter your email', pattern: {value: /^\S+@\S+$/i,message: 'Invalid email address'}})} type="email" id="email" placeholder='Please enter' className="xui-bdr-rad-2" required/>
                                    {errors.email && <span className="xui-badge xui-badge-danger xui-d-block xui-w-fluid-100 xui-bdr-rad-2 xui-lg-font-sz-90 xui-font-sz-80 xui-mt-1">{errors.email.message}</span>}
                                </div>
                                <div className="form-box">
                                    <label>Phone Number</label>
                                    <input {...register('phone', {required: 'This field is required', pattern: {value: /^[0-9]{10,15}$/, message: 'Phone number must be 10–15 digits'}})} type="tel" id="phone" placeholder='Please enter' className="xui-bdr-rad-2" required/>
                                    {errors.phone && <span className="xui-badge xui-badge-danger xui-d-block xui-w-fluid-100 xui-bdr-rad-2 xui-lg-font-sz-90 xui-font-sz-80 xui-mt-1">{errors.phone.message}</span>}
                                </div>
                                <div className="form-box">
                                    <label>Subject</label>
                                    <input {...register('subject', {required: "This field is required"})} type="text" id="subject" placeholder='Please enter' className="xui-bdr-rad-2" required/>
                                    {errors.subject && <span className="xui-badge xui-badge-danger xui-d-block xui-w-fluid-100 xui-bdr-rad-2 xui-lg-font-sz-90 xui-font-sz-80 xui-mt-1">{errors.subject.message}</span>}
                                </div>
                            </div>
                            <div className="form-box xui-mt-1">
                                <label>Message</label>
                                <textarea {...register('message', {required: "This field is required"})} id="message" placeholder='Write your message here' className="xui-bdr-rad-1" required></textarea>
                                {errors.message && <span className="xui-badge xui-badge-danger xui-d-block xui-w-fluid-100 xui-bdr-rad-2 xui-lg-font-sz-90 xui-font-sz-80 xui-mt-1">{errors.message.message}</span>}
                            </div>
                            <div className="form-box">
                                <button disabled={isDisabled} className="xui-btn xui-font-sz-85 xui-px-3 bg-active xui-bdr-rad-half xui-mt-1 xui-text-white">{isDisabled ? 'Sending Message...' : 'Send Message'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
            <SuccessAlert name={`successAlert`} message={successErrMsg} noIcon={true} />
        </>
    );
};

export default Header;