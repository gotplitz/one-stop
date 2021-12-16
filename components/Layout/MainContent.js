import { Box, Grid } from '@material-ui/core';

const MainContent = ({ subtitle, content }) => {
    return (
        <Box className='section info-section'>
            <section>
                <Grid container justifyContent='center'>
                    <Grid item xs={10} sm={8}>
                        <div style={{ textAlign: 'center' }}>
                            {subtitle !== '' && (
                                <h2 className='heading-2'>{subtitle}</h2>
                            )}
                            <p
                                className='body-text'
                                dangerouslySetInnerHTML={{ __html: content }}
                            ></p>
                            <a href='tel:8003296634'>
                                <h3 className='heading-3'>800-329-6634</h3>
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </Box>
    );
};

export default MainContent;
