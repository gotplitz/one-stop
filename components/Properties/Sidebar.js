import { Grid } from '@material-ui/core';
import propertyStyles from '../../styles/Property.module.css';

import SmallFilter from './SmallFilter';

const Sidebar = ({ prope }) => {
    return (
        <div className={propertyStyles.sidebar}>
            {prope.propertyitems && (
                <Grid container>
                    <Grid item xs={12}>
                        <h6>Specifications</h6>
                        <ul>
                            {prope.propertyitems &&
                                prope.propertyitems.officesize && (
                                    <li>
                                        <i className='fal fa-chair-office'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Office Size:
                                            <span>
                                                {prope.propertyitems.officesize}
                                            </span>
                                        </div>
                                    </li>
                                )}
                            {prope.propertyitems &&
                                prope.propertyitems.warehousesize && (
                                    <li>
                                        <i className='fal fa-warehouse'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Warehouse Size:
                                            <span>
                                                {
                                                    prope.propertyitems
                                                        .warehousesize
                                                }
                                            </span>
                                        </div>
                                    </li>
                                )}
                            {prope.propertyitems &&
                                prope.propertyitems.landsize && (
                                    <li>
                                        <i className='fal fa-map'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Land Size:
                                            <span>
                                                {prope.propertyitems.landsize}
                                            </span>
                                        </div>
                                    </li>
                                )}
                            {prope.propertyitems &&
                                prope.propertyitems.electric && (
                                    <li>
                                        <i className='fal fa-plug'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Electric:
                                            <span>
                                                {prope.propertyitems.electric}
                                            </span>
                                        </div>
                                    </li>
                                )}
                            {prope.propertyitems &&
                                prope.propertyitems.bathrooms && (
                                    <li>
                                        <i className='fal fa-toilet'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Bathrooms:
                                            <span>
                                                {prope.propertyitems.bathrooms}
                                            </span>
                                        </div>
                                    </li>
                                )}
                            {prope.propertyitems && prope.propertyitems.water && (
                                <li>
                                    <i className='fal fa-faucet'></i>
                                    <div className={propertyStyles.propeitems}>
                                        Water:
                                        <span>{prope.propertyitems.water}</span>
                                    </div>
                                </li>
                            )}
                            {prope.propertyitems &&
                                prope.propertyitems.ceilingheight && (
                                    <li>
                                        <i className='fal fa-line-height'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Ceiling Height:
                                            <span>
                                                {
                                                    prope.propertyitems
                                                        .ceilingheight
                                                }
                                            </span>
                                        </div>
                                    </li>
                                )}
                            {prope.propertyitems &&
                                prope.propertyitems.loadingdock && (
                                    <li>
                                        <i className='fal fa-truck-loading'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Loading Dock:
                                            <span>
                                                {
                                                    prope.propertyitems
                                                        .loadingdock
                                                }
                                            </span>
                                        </div>
                                    </li>
                                )}
                            {prope.propertyitems &&
                                prope.propertyitems.taccess && (
                                    <li>
                                        <i className='fal fa-trailer'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Tractor Trailer Access:
                                            <span>
                                                {prope.propertyitems.taccess}
                                            </span>
                                        </div>
                                    </li>
                                )}
                            {prope.propertyitems && prope.propertyitems.zoning && (
                                <li>
                                    <i className='fal fa-border-all'></i>
                                    <div className={propertyStyles.propeitems}>
                                        Zoning:
                                        <span>
                                            {prope.propertyitems.zoning}
                                        </span>
                                    </div>
                                </li>
                            )}
                            {prope.propertyitems &&
                                prope.propertyitems.drivein && (
                                    <li>
                                        <i className='fal fa-truck-container'></i>
                                        <div
                                            className={
                                                propertyStyles.propeitems
                                            }
                                        >
                                            Building Drive-In Access:
                                            <span>
                                                {prope.propertyitems.drivein}
                                            </span>
                                        </div>
                                    </li>
                                )}
                        </ul>
                    </Grid>
                </Grid>
            )}

            <Grid container style={{ paddingTop: 50 }}>
                <Grid item xs={12}>
                    <h6>Location</h6>
                    <ul className={propertyStyles.otheritems}>
                        {prope.propertylocation && (
                            <li>
                                <span>{prope.propertylocation[1]}</span>
                            </li>
                        )}
                    </ul>
                </Grid>
            </Grid>
            <Grid container style={{ paddingTop: 50 }}>
                <Grid item xs={12}>
                    <h6>Space Type</h6>
                    <ul className={propertyStyles.otheritems}>
                        {prope.propertycat &&
                            prope.propertycat.map(
                                (pcat, index) =>
                                    pcat !== 'All Types' && (
                                        <li key={index}>
                                            <span>{pcat}</span>
                                        </li>
                                    )
                            )}
                    </ul>
                </Grid>
            </Grid>
            <Grid container style={{ paddingTop: 50 }}>
                <Grid item xs={12}>
                    <SmallFilter />
                </Grid>
            </Grid>
        </div>
    );
};

export default Sidebar;
