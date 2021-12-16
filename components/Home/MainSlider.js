import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import SliderImage from '../Extras/SliderImage';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const MainSlider = ({ sliders }) => {
    return (
        <Fragment>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 12000 }}
                loop={true}
                speed={1000}
                navigation
            >
                {sliders &&
                    sliders.length > 0 &&
                    sliders
                        .sort((a, b) => a.order - b.order)
                        .map((slider) => (
                            <SwiperSlide key={slider._id}>
                                <div className='caption-container'>
                                    <h1
                                        dangerouslySetInnerHTML={{
                                            __html: slider.title,
                                        }}
                                    ></h1>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: slider.caption,
                                        }}
                                        className='punch-line'
                                    ></div>

                                    <div
                                        className='more-details'
                                        dangerouslySetInnerHTML={{
                                            __html: slider.moredetails,
                                        }}
                                    ></div>
                                    <div className='buttons'>
                                        <Link href={slider.btnlone}>
                                            <a className='hero-button-one'>
                                                {slider.btnone}
                                            </a>
                                        </Link>
                                        <Link href={slider.btnltwo}>
                                            <a className='hero-button-two'>
                                                {slider.btntwo}
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className='slider-overlay'></div>

                                <SliderImage
                                    pict={slider.img}
                                    alt={`Slider image number ${slider.order}`}
                                />
                            </SwiperSlide>
                        ))}
            </Swiper>
        </Fragment>
    );
};

export default MainSlider;
