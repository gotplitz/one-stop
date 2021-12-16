import { Container, Grid } from '@material-ui/core';

const TopPages = ({ pagetitle, heroImage }) => {
    return (
        <div
            className='sub-pages-hero'
            style={{
                backgroundImage: `url(https://admin.onestopspaces.com/uploads/${heroImage})`,
            }}
        >
            <section>
                <Container maxWidth='lg'>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='center'
                        className='hero-container'
                    >
                        <Grid item>
                            <h1 className='heading-1 is-white'>{pagetitle}</h1>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='background-overlay'></div>
        </div>
    );
};

export default TopPages;
