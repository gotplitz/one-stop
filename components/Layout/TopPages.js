import { Grid } from '@material-ui/core';

const TopPages = ({ pagetitle, heroImage, currentloc }) => {
    return (
        <div
            className='sub-pages-hero'
            style={{ backgroundImage: `url(/images/${heroImage})` }}
        >
            <section>
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    className='hero-container'
                >
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <h1 className='is-white'>{pagetitle}</h1>
                        <h3 className='is-white'>{currentloc}</h3>
                    </Grid>
                </Grid>
            </section>
            <div className='background-overlay'></div>
        </div>
    );
};

export default TopPages;
