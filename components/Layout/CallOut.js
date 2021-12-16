import { Grid } from '@material-ui/core';

import calloutStyles from '../../styles/CallOut.module.css';

const CallOut = ({ sectionTitle, intro }) => {
    return (
        <div className={`${calloutStyles['callout-section']}`}>
            <section>
                <div className={`${calloutStyles['callout-intro']}`}>
                    <h2 style={{ maxWidth: 800, margin: '0 auto' }}>
                        {sectionTitle}
                    </h2>
                    <div className='body-text' style={{ color: '#fff' }}>
                        {intro}
                    </div>
                </div>
                <Grid container spacing={8} justifyContent='space-evenly'>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={`${calloutStyles['icon-box']}`}>
                            <figure className={`${calloutStyles['icon-wrap']}`}>
                                <i className='fal fa-map-marker-alt'></i>
                            </figure>
                            <h4 className='text-center'>
                                Convenient Locations
                            </h4>
                            <p className={`body-text`}>
                                With our industrial parks located in the 5
                                boroughs and Long Island, we are bound to have
                                the perfect warehouse, office space, or yard
                                space to fit your needs.{' '}
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={`${calloutStyles['icon-box']}`}>
                            <figure className={`${calloutStyles['icon-wrap']}`}>
                                <i className='fal fa-truck-moving'></i>
                            </figure>
                            <h4 className=' text-center'>Superb Service</h4>
                            <p className={`body-text`}>
                                We know that finding the right space for your
                                business can be difficult; however, with us,
                                it's simple. Our knowledgeable management staff
                                will work with you every step of the way to
                                ensure that we customize what's best for your
                                company's needs.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={`${calloutStyles['icon-box']}`}>
                            <figure className={`${calloutStyles['icon-wrap']}`}>
                                <i className='fal fa-warehouse-alt'></i>
                            </figure>
                            <h4 className=' text-center'>
                                Many Rentals Options
                            </h4>
                            <p className={`body-text`}>
                                One Stop will assist your business to explore
                                various rental options that will suit your
                                needs.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default CallOut;
