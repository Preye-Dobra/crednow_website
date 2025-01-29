import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from '../TestimonialCard';

const Testimonials = () => {
    return (
        <section className='xui-py-1' style={{paddingRight: '0'}}>
                <div className='xui-text-center'>
                    <h3 className='xui-font-sz-200 color-label xui-font-w-400'>Testimonials</h3>
                    <p className='color-label xui-mt-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto xui-line-height-1-half'>See How We've Empowered Real Users to Achieve Their Financial Goals</p>
                </div>
                <div className='xui-mt-2'>
                    <Swiper
                        className='testimonial-swiper'
                        slidesPerView={3}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // breakpoints={{
                        //     320: {
                        //         slidesPerView: 1.2,
                        //         slidesOffsetBefore: 8,
                        //         slidesOffsetAfter: 8,
                        //         spaceBetween: 12,
                        //     },
                        //     1024: {
                        //         slidesPerView: 'auto',
                        //     },
                        // }}
                    >
                        <SwiperSlide>
                            <TestimonialCard text='CredNow made it so easy for me to get the funds I needed for my home renovation. Their process was quick and transparent. Highly recommend!' initial='JB' name='Jane Bamidele' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard text={`As a small business owner, CredNow's business loan helped me take my company to the next level. Their support team was fantastic!`} initial='NM' name='Nduka Mary.' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard text={`Crednow business loan allowed me to expand my small business and reach new heights. Their support was invaluable, and I couldn't have done it without them."`} initial='EO' name='Emeka Onyema.' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard text={`"I was faced with an unexpected medical expense, and Crednow was there to support me. Their process was quick, and their team was incredibly helpful. Thank you, Crednow!"`} initial='CA' name='Chinelo A.' />
                        </SwiperSlide>
                    </Swiper>
                </div>
        </section>
    );
};

export default Testimonials;
