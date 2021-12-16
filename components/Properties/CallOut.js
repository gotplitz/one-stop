import { Grid, Button, Container } from '@material-ui/core';
import Link from 'next/link';

import calloutStyles from '../../styles/CallOut.module.css';

const CallOut = ({ lastb }) => {
    return (
        <section>
            <div className={`${calloutStyles['callout-intro']}`}>
                <h2 className='heading-2'>{lastb.subtitle}</h2>
                <div
                    className={calloutStyles.servbody}
                    dangerouslySetInnerHTML={{ __html: lastb.bodybox }}
                ></div>
            </div>

            <Grid container spacing={8} justifyContent='center'>
                <Grid item xs={12} sm={12} md={6}>
                    <a href='tel:8603296634' className={`primary-btn`}>
                        Call Today: (860) 329-6634
                    </a>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Link href='/about-us'>
                        <a className={`secondary-btn`}>Contact Us Online</a>
                    </Link>
                </Grid>
            </Grid>
        </section>
    );
};

export default CallOut;
