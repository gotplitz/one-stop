import { Grid } from '@material-ui/core';
import Link from 'next/link';

const CallToAction = () => {
    return (
        <div className='red-cta'>
            <section>
                <Grid container alignItems='center'>
                    <Grid item xs={12} sm={7}>
                        <div className='cta-text'>
                            <h3>Contact Us</h3>
                            <p className='body-text'>
                                Contact us to learn more about our industrial
                                parks and commercial space that we can provide
                                for you!
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <div className='white-button'>
                            <Link href='/contact-us'>
                                <a>Contact Us</a>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default CallToAction;
