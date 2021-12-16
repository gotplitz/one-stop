import Image from 'next/image';
import infoStyles from '../../styles/InfoContent.module.css';
import { Grid } from '@material-ui/core';

const SocialIcons = () => {
    return (
        <div className={`${infoStyles['info-icons']}`}>
            <Grid
                container
                spacing={2}
                justifyContent='center'
                alignItems='center'
            >
                <Grid item>
                    <div className={`${infoStyles['info-icon']}`}>
                        <a
                            href='https://www.yelp.com/biz/above-the-rest-roofing-and-siding-hamden'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                src='/images/yelp-brands.svg'
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                </Grid>
                <Grid item>
                    <div className={`${infoStyles['info-icon']}`}>
                        <a
                            href='https://g.page/abovetherestroofingandsiding?gm'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                src='/images/google-brands.svg'
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                </Grid>
                <Grid item>
                    <div className={`${infoStyles['info-icon']}`}>
                        <a
                            href='https://www.facebook.com/stormdamagect'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                src='/images/facebook-f-brands.svg'
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default SocialIcons;
