import { Grid } from '@material-ui/core';
import propertyStyles from '../../styles/Property.module.css';

const MainContent = () => {
    return (
        <div
            className={`${propertyStyles.contentpage} properties-page-section`}
        >
            <section>
                <Grid
                    container
                    spacing={3}
                    className='title-section'
                    justifyContent='center'
                >
                    <Grid item xs={11} sm={8} md={7}>
                        <h2>{allsp.title}</h2>
                        <div
                            className='intro-text'
                            dangerouslySetInnerHTML={{
                                __html: allsp.content,
                            }}
                        ></div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

const allsp = {
    title: 'Ask Our Tenants',
    content: `Take a look at a few of our long-term clients that have rented space at our properties.`,
};

export default MainContent;
