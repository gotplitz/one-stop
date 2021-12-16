import { Grid } from '@material-ui/core';
import propertyStyles from '../../styles/Property.module.css';
import { useEffect, useState } from 'react';

import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyAch_9Qk6XtqtcrV0eVFVwZ9slv6POKuss');

import PropeMap from './PropeMap';
import Sidebar from './Sidebar';

const TopPages = ({ prope }) => {
    const [locationState, setLocationState] = useState({});
    const location = prope.propertyaddress;
    useEffect(() => {
        const getLocation = async () => {
            const finalLocation = await Geocode.fromAddress(location);
            setLocationState({ ...finalLocation.results[0].geometry.location });
        };
        getLocation();
    }, [location, setLocationState]);

    return (
        <div className={propertyStyles.propertybody}>
            <section>
                <Grid container justifyContent='center' spacing={7}>
                    <Grid item xs={12} sm={12} md={7}>
                        {locationState && locationState.lat ? (
                            <PropeMap coordinates={locationState} />
                        ) : null}
                        <div className={propertyStyles.propesum}>
                            <h3>Property Summary</h3>
                            <div
                                className='body-text'
                                dangerouslySetInnerHTML={{
                                    __html: prope.propertydetails,
                                }}
                            ></div>
                        </div>
                        <div className={propertyStyles.propesum}>
                            {prope.extraboxes.slice(1, 10).map((eb) => (
                                <div
                                    key={eb._id}
                                    className={propertyStyles.extraboxes}
                                >
                                    <h6>{eb.subtitle}</h6>
                                    <div
                                        className='body-text extraboxes-props'
                                        dangerouslySetInnerHTML={{
                                            __html: eb.bodybox,
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <Sidebar prope={prope} />
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default TopPages;
