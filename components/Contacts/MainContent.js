import { Grid } from '@material-ui/core';
import homeStyles from '../../styles/Home.module.css';
import contactStyles from '../../styles/Contact.module.css';

import ContactForm from './ContactForm';

const MainContent = () => {
    return (
        <div className='plata-section'>
            <section className='info-section'>
                <Grid container spacing={7} alignItems='flex-start'>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={homeStyles.contentother}>
                            <ContactForm />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={homeStyles.contentwrap}>
                            <h3>Get in Touch</h3>
                            <div className={homeStyles.text}>
                                <p style={{ marginBottom: 20 }}>
                                    Looking for more information about our
                                    commercial space options in New York? Get in
                                    touch with us today by filling out our form
                                    below or giving us a call at{' '}
                                    <a href='tel:7187868400'>(718) 786-8400.</a>
                                </p>
                                <p>
                                    With our convenient locations and quality
                                    service, all your needs will be met through
                                    One Stop Spaces.
                                </p>
                            </div>

                            <div className={contactStyles.contactblurb}>
                                <h6>Address</h6>
                                <h3>
                                    240 Lincoln Place,
                                    <br />
                                    Westbury, NY 11590
                                </h3>
                            </div>
                            <div className={contactStyles.contactblurb}>
                                <h6>Hours</h6>
                                <h3>
                                    Monday - Friday:
                                    <br />
                                    9:00 AM - 5:00 PM
                                </h3>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default MainContent;
