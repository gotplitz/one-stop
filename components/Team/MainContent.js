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
                    spacing={2}
                    className='title-section'
                    justifyContent='center'
                >
                    <Grid item xs={11}>
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
    title: 'We Are One Stop Properties',
    content: `Our experienced and professional team members are dedicated to ensuring you are satisfied with every aspect of your commercial rental space. They will find the perfect solution for your business’ needs.`,
};

export default MainContent;
