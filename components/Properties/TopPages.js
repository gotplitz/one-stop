import { Grid } from '@material-ui/core';
import propertyStyles from '../../styles/Property.module.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

const TopPages = ({ prope }) => {
    const [thumbSwiper, setThumbSwiper] = useState(null);

    return (
        <div
            className={`${propertyStyles.propertypagetop} sub-pages-hero properties-only`}
        >
            <section>
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    className='hero-container'
                >
                    <Grid item xs={12}>
                        <h1 className='is-white'>{prope.propertytitle}</h1>
                        <h3>{prope.propertyaddress}</h3>
                        <div className={propertyStyles.oncall}>
                            Available
                            {/* <span>
                                {prope.extraboxes.map(
                                    (peb) => peb.order === 1 && peb.bodybox
                                )}
                            </span> */}
                        </div>
                    </Grid>
                </Grid>
            </section>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                thumbs={{ swiper: thumbSwiper }}
            >
                <SwiperSlide>
                    <div className='slider-property-overlay'></div>
                    <img
                        src={`https://admin.onestopspaces.com/uploads/${prope.featuredimg}`}
                        alt={`${prope.propertytitle}`}
                        width='1500'
                        height='1000'
                    />
                </SwiperSlide>
                {prope &&
                    prope.gallery.length > 0 &&
                    prope.gallery.map(
                        (slider) =>
                            slider !== null && (
                                <SwiperSlide key={slider._id}>
                                    <div className='slider-property-overlay'></div>
                                    <img
                                        src={`https://admin.onestopspaces.com/uploads/${slider.fileName}`}
                                        alt={`Slider image number ${slider._id}`}
                                        width='1500'
                                        height='1000'
                                    />
                                </SwiperSlide>
                            )
                    )}
            </Swiper>

            <Swiper
                id='thumbs'
                spaceBetween={10}
                navigation
                onSwiper={setThumbSwiper}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },

                    550: {
                        slidesPerView: 2,
                    },

                    1024: {
                        slidesPerView: 3,
                    },
                    1500: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <img
                        src={`https://admin.onestopspaces.com/uploads/${prope.featuredimg}`}
                        alt={`${prope.propertytitle}`}
                        width='400'
                        height='267'
                    />
                </SwiperSlide>

                {prope &&
                    prope &&
                    prope.gallery &&
                    prope.gallery.length > 0 &&
                    prope.gallery.map(
                        (slider) =>
                            slider !== null && (
                                <SwiperSlide key={slider._id}>
                                    <img
                                        src={`https://admin.onestopspaces.com/uploads/${slider.fileName}`}
                                        alt={`Slider image number ${slider._id}`}
                                        width='700'
                                        height='400'
                                    />
                                </SwiperSlide>
                            )
                    )}
            </Swiper>
        </div>
    );
};

export default TopPages;
