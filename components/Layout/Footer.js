import { Grid } from '@material-ui/core';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

// Parts
import SmallForm from '../Contacts/SmallForm';

const footer = ({ pages }) => {
    return (
        <footer
            className='footer'
            style={{ backgroundImage: 'url(/images/world-map.png)' }}
        >
            <section className='footer-container is-white'>
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={6} md={3}>
                        <img
                            src='/images/one-stop-logo.png'
                            alt='One Stop Properties logo'
                            width='260'
                            height='145'
                        />

                        <div className='contact-info'>
                            <p className='body-text'>
                                Proudly offering flexible space options allowing
                                our clients the opportunity to increase or
                                downsize to meet the needs of their business.
                            </p>
                        </div>

                        <div className='icons'>
                            <Link href='/properties'>
                                <a className='secondary-btn'>All Properties</a>
                            </Link>
                            <a
                                href='https://www.facebook.com/onestopspaces'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fab fa-facebook-f'></i>
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                        <h4 className='footer-widgets-titles'>Explore</h4>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <ul className='footer-nav'>
                                    {pages.slice(0, 4).map((pg) => (
                                        <li key={pg.id}>
                                            <Link href={`/${pg.slug}`}>
                                                <a>
                                                    <i className='fas fa-play'></i>{' '}
                                                    {pg.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ul className='footer-nav'>
                                    {pages.slice(4, 10).map((pg) => (
                                        <li key={pg.id}>
                                            <Link href={`/${pg.slug}`}>
                                                <a>
                                                    <i className='fas fa-play'></i>{' '}
                                                    {pg.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div className='footer-form-container'>
                            <h4>Contact Us Today</h4>
                            <SmallForm />
                        </div>
                    </Grid>
                </Grid>
            </section>
            <Grid container className='credits-bar' justifyContent='center'>
                <Grid item xs={10}>
                    <div className='credits-bar-txt'>
                        One Stop Properties © 2021 | Design and Dev by{' '}
                        <a
                            href='https://ferociousmedia.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Ferocious Media
                        </a>
                    </div>
                </Grid>
            </Grid>
        </footer>
    );
};

export default footer;
