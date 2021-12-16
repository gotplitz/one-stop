import { Grid } from '@material-ui/core';
import homeStyles from '../../styles/Home.module.css';
import propertyStyles from '../../styles/Property.module.css';

const ExtraBoxes = ({ extra }) => {
    const promonumb = `promo-${extra.order}`;

    return (
        <Grid item xs={12} sm={6}>
            <div
                className={`is-white ${propertyStyles['promo']} ${homeStyles[promonumb]}`}
            >
                <div className={homeStyles.spwrapper}>
                    <h3 className='heading-3'>{extra.subtitle}</h3>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: extra.bodybox,
                        }}
                    ></div>
                </div>
            </div>
        </Grid>
    );
};

export default ExtraBoxes;
