import { Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import aboutStyles from '../../styles/About.module.css';

// import Swiper core and required components
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    A11y,
    Thumbs,
} from 'swiper';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y, Thumbs]);

const prope = [
    {
        fileName: 'iStock-1202470984.jpg',
    },
    {
        fileName: 'iStock-1203731761.jpg',
    },
    {
        fileName: 'iStock-1214977181.jpg',
    },
    {
        fileName: 'iStock-1209591548.jpg',
    },
    {
        fileName: 'iStock-1211885813.jpg',
    },
    {
        fileName: 'iStock-1182645061.jpg',
    },
    {
        fileName: 'iStock-1207577062.jpg',
    },
];

const ServiceLike = () => {
    return (
        <div className={`${aboutStyles.finalgallery} about-slider`}>
            <section>
                <Grid container justifyContent='center' spacing={1}>
                    <Grid item xs={10}>
                        <h3>Service Like No Other</h3>
                        <p>
                            Here at One Stop, our primary goal is to ensure all
                            your commercial needs are met. What sets us apart
                            from others is our flexible agreements that we
                            offer. We also offer affordable prices and
                            convenient locations.
                        </p>
                    </Grid>
                </Grid>
            </section>
            <Swiper
                spaceBetween={10}
                autoplay={{ delay: 9000 }}
                loop={true}
                speed={1000}
                navigation
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
                {prope &&
                    prope
                        // .sort((a, b) => a.order - b.order)
                        .map((slider, index) => (
                            <SwiperSlide key={index}>
                                <div className='slider-property-overlay'></div>
                                <img
                                    src={`https://admin.onestopspaces.com/uploads/${slider.fileName}`}
                                    alt={`Slider image number ${index}`}
                                    width='1500'
                                    height='1000'
                                />
                            </SwiperSlide>
                        ))}
            </Swiper>
        </div>
    );
};

export default ServiceLike;
