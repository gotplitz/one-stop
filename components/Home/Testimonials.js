import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';

// Materialize
import { Container, Grid } from '@material-ui/core';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const Testimonials = ({ testimonials }) => {
    return (
        <div className={`home-testimonials-wrapper testimonials`}>
            <section>
                <Grid container spacing={5} justifyContent='center'>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='blurb-icon'>
                            <div className='icon-container'>
                                <i className='far fa-handshake'></i>
                            </div>
                            <p className='blurb-text'>
                                Professional property with you &amp; your
                                insurance companies
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='blurb-icon'>
                            <div className='icon-container'>
                                <i className='far fa-calendar-day'></i>
                            </div>
                            <p className='blurb-text'>
                                Comprehensive roof &amp; tenant siding
                                inspection checklist
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='blurb-icon'>
                            <div className='icon-container'>
                                <i className='far fa-check-square'></i>
                            </div>
                            <p className='blurb-text'>
                                Property at a date &amp; time that works for you
                                and your family
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={5} style={{ marginTop: 90 }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <div
                            className='text-center'
                            style={{ borderBottom: '2px solid var(--primero)' }}
                        >
                            <h3>Hear What Our Client's Have To Say!</h3>
                        </div>
                    </Grid>
                </Grid>

                <Grid
                    container
                    spacing={0}
                    style={{ marginTop: 90, marginBottom: 90 }}
                >
                    <Grid item xs={12}>
                        <Swiper
                            spaceBetween={60}
                            autoplay={{ delay: 12000 }}
                            loop={true}
                            speed={1000}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                },

                                550: {
                                    slidesPerView: 2,
                                },

                                1024: {
                                    slidesPerView: 2,
                                },
                                1500: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {testimonials &&
                                testimonials.length > 0 &&
                                testimonials
                                    .sort(
                                        (a, b) =>
                                            new Date(a.date) - new Date(b.date)
                                    )
                                    .map(
                                        (test) =>
                                            test.testimonialstatus &&
                                            test.testimonialcat.includes(
                                                'Home'
                                            ) && (
                                                <SwiperSlide key={test._id}>
                                                    <div className='testimonial-container'>
                                                        <div
                                                            className='testi-statement'
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    test.testimonial,
                                                            }}
                                                        ></div>
                                                        <h6>
                                                            {
                                                                test.testimonialtitle
                                                            }
                                                        </h6>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                    )}
                        </Swiper>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default Testimonials;
