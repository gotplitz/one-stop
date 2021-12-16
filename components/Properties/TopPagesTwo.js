import { Grid } from '@material-ui/core';
import propertyStyles from '../../styles/Property.module.css';

const TopPagesTwo = ({ prope }) => {
    return (
        <div
            className={`${propertyStyles.propertypagetop} sub-pages-hero properties-only`}
        >
            <section>
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    className='hero-container'
                >
                    <Grid item xs={12}>
                        <h1 className='is-white'>{prope.propertytitle}</h1>
                        <h3>{prope.propertyaddress}</h3>
                        <div className={propertyStyles.oncall}>
                            Available
                            {/* <span>
                                {prope.extraboxes.map(
                                    (peb) => peb.order === 1 && peb.bodybox
                                )}
                            </span> */}
                        </div>
                    </Grid>
                </Grid>
            </section>

            <div className='noslider'>
                <div className='slider-property-overlay'></div>
                <img
                    src={`https://admin.onestopspaces.com/uploads/${prope.featuredimg}`}
                    alt={`${prope.propertytitle}`}
                    width='1500'
                    height='1000'
                />
            </div>
        </div>
    );
};

export default TopPagesTwo;
