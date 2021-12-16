import Link from 'next/link';
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import propertyStyles from '../../styles/Property.module.css';

const PropertiesPageList = ({ properties, setLoc }) => {
    const [location, setLocation] = useLocalStorage(
        'location',
        'All Locations'
    );
    const [type, setType] = useLocalStorage('type', 'All Types');

    const [formData, setFormdata] = useState({
        thelocation: 'All Locations',
        thetype: 'All Types',
    });

    const { thelocation, thetype } = formData;

    useEffect(() => {
        setFormdata({
            ...formData,
            thelocation:
                window.localStorage.location &&
                window.localStorage.location !== undefined
                    ? window.localStorage.location
                    : 'All Locations',
            thetype:
                window.localStorage.type &&
                window.localStorage.type !== undefined
                    ? window.localStorage.type
                    : 'All Types',
        });
        setLocation(
            window.localStorage.location &&
                window.localStorage.location !== undefined
                ? window.localStorage.location
                : 'All Locations'
        );
        setType(
            window.localStorage.type && window.localStorage.type !== undefined
                ? window.localStorage.type
                : 'All Types'
        );
        setLoc(
            window.localStorage.location &&
                window.localStorage.location !== undefined
                ? window.localStorage.location
                : 'All Locations'
        );

        // eslint-disable-next-line
    }, []);

    const onChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
        setLocation(e.target.value);
        setLoc(e.target.value);
    };

    const inChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
        setType(e.target.value);
    };

    const onClick = (e) => {
        e.preventDefault();
        setFormdata({
            ...formData,
            thelocation: 'All Locations',
            thetype: 'All Types',
        });
        setLoc('All Locations');
        setType('All Types');
        setLocation('All Locations');
    };

    return (
        <div className='recent-listings properties-page-section'>
            <section className={propertyStyles.filtersection}>
                <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={11} sm={10} md={7}>
                        <form noValidate className={propertyStyles.filterform}>
                            <Grid
                                container
                                alignItems='stretch'
                                className={propertyStyles.filterrow}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    className={propertyStyles.filtercol}
                                >
                                    <div className={propertyStyles.filteritem}>
                                        <div
                                            className={
                                                propertyStyles.labelfilter
                                            }
                                        >
                                            <h6>Location</h6>
                                        </div>
                                        <select
                                            name='thelocation'
                                            className='filter-select'
                                            aria-invalid='false'
                                            value={thelocation}
                                            onChange={(e) => onChange(e)}
                                        >
                                            {thelocations.map((tl) => (
                                                <option
                                                    key={tl.thelocation}
                                                    value={tl.thelocation}
                                                    className={
                                                        propertyStyles.option
                                                    }
                                                >
                                                    {tl.thelocation}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <div className={propertyStyles.filteritem}>
                                        <div
                                            className={
                                                propertyStyles.labelfilter
                                            }
                                        >
                                            <h6>Space Type</h6>
                                        </div>
                                        <select
                                            name='thetype'
                                            className='filter-select'
                                            aria-invalid='false'
                                            value={thetype}
                                            onChange={(e) => inChange(e)}
                                        >
                                            {thetypes.map((tl) => (
                                                <option
                                                    key={tl.thetype}
                                                    value={tl.thetype}
                                                >
                                                    {tl.thetype}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className={propertyStyles.resetbtn}>
                                        <Link href='#'>
                                            <a onClick={(e) => onClick(e)}>
                                                <span>Reset Filter</span>
                                            </a>
                                        </Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </section>
            <section>
                <Grid
                    container
                    spacing={3}
                    className='title-section'
                    justifyContent='center'
                >
                    <Grid item xs={11} sm={8} md={7}>
                        <div className={propertyStyles.dynamictext}>
                            <small>You Are Viewing</small>
                            <div className='intro-text'>
                                <b>{type}</b> properties in <b>{location}</b>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={3}
                    justifyContent='center'
                    alignItems='stretch'
                >
                    {properties
                        .sort((a, b) => {
                            var nameA = a.propertytitle.toUpperCase();
                            var nameB = b.propertytitle.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((prt) =>
                            prt.propertylocation.includes(location) &&
                            prt.propertycat.includes(type) &&
                            prt.propertiestatus ? (
                                <Grid key={prt._id} item xs={12} sm={6} md={4}>
                                    <Link
                                        href='/property/[propertylink]'
                                        as={`/property/${prt.propertylink}`}
                                    >
                                        <a className='property-btn'>
                                            <div className='property-item'>
                                                <div className='property-image'>
                                                    <img
                                                        src={`https://admin.onestopspaces.com/uploads/${prt.featuredimg}`}
                                                        alt={prt.propertytitle}
                                                        width='1024'
                                                        height='800'
                                                        priority={true}
                                                    />
                                                </div>
                                                <div className='property-content'>
                                                    <div className='property-title'>
                                                        {prt.propertytitle}
                                                    </div>
                                                    <div className='property-address'>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    prt.propertyaddress,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </Grid>
                            ) : null
                        )}
                </Grid>
            </section>
        </div>
    );
};

const thelocations = [
    {
        thelocation: 'All Locations',
    },
    {
        thelocation: 'Brooklyn',
    },
    {
        thelocation: 'Queens',
    },
    {
        thelocation: 'Long Island',
    },
    {
        thelocation: 'Bronx',
    },
];

const thetypes = [
    {
        thetype: 'All Types',
    },
    {
        thetype: 'Creative Space',
    },
    {
        thetype: 'Film Production',
    },
    {
        thetype: 'Construction',
    },
    {
        thetype: 'Land',
    },
    {
        thetype: 'Office',
    },
    {
        thetype: 'Showroom',
    },
    {
        thetype: 'Warehouse',
    },
    {
        thetype: 'Manufacturing',
    },
    {
        thetype: ' Distribution',
    },
    {
        thetype: 'Transportation',
    },
    {
        thetype: 'Storage',
    },
    {
        thetype: 'Light Manufacturing',
    },
    {
        thetype: 'Garage',
    },
];

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            if (typeof window !== 'undefined') {
                const item = window.localStorage.getItem(key);

                return item ? item : initialValue;
            }
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if (typeof window !== 'undefined') {
                return window.localStorage.setItem(key, valueToStore);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

export default PropertiesPageList;
