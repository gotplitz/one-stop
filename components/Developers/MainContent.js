import { Grid } from '@material-ui/core';
import Link from 'next/link';
import homeStyles from '../../styles/Home.module.css';

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
                            <h3>Contact One Stop Properties</h3>
                            <div className={homeStyles.text}>
                                <p style={{ marginBottom: 20 }}>
                                    Generate high rental income with our model
                                    while you rezone and plan for your
                                    development. Maximizing your industrial
                                    property with us affords you the flexibility
                                    you require to develop while still realizing
                                    the profit from your investment.
                                </p>
                                {/* <p>
                                    Our developer contacts are always happy to
                                    help answer any questions or address any
                                    concerns that may arise about your
                                    commercial space.
                                </p> */}
                            </div>

                            <div className={homeStyles.btnwrap}>
                                <Link href='/contact-us'>
                                    <a className='red-btn'>Other Inquiries</a>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default MainContent;
