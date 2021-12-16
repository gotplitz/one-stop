import { Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import homeStyles from '../../styles/Home.module.css';

const MainContent = () => {
    return (
        <div className='plata-section'>
            <section className='info-section'>
                <Grid container spacing={7} alignItems='flex-start'>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={`player-icon ${homeStyles.contentimg}`}>
                            <ReactPlayer
                                url='https://admin.onestopspaces.com/uploads/commercial-one-stop-1.MP4'
                                width='100%'
                                height='100%'
                                controls={true}
                                light={'/images/video-one.jpg'}
                                config={{
                                    file: {
                                        attributes: {
                                            onContextMenu: (e) =>
                                                e.preventDefault(),
                                            controlsList: 'nodownload',
                                        },
                                    },
                                }}
                                className='home-video'
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={homeStyles.contentwrap}>
                            <h3>About One Stop Spaces</h3>
                            <div className={homeStyles.text}>
                                {/* <p style={{ marginBottom: 20 }}>
                                    Are you looking for the best in commercial
                                    space for New York? We have warehouses,
                                    parking lots, office spaces, and more for
                                    you to choose from. With excellent locations
                                    and competitive prices, our services are
                                    second-to-none.
                                </p> */}

                                <p style={{ marginBottom: 20 }}>
                                    With excellent locations and competitive
                                    prices, our services are second-to-none. For
                                    any use of warehouses, yards, and office
                                    space.
                                </p>
                            </div>

                            <div className={homeStyles.btnwrap}>
                                <Link href='/about-us'>
                                    <a className='red-btn'>About Us</a>
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
