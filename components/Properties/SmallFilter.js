import Link from 'next/link';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import propertyStyles from '../../styles/Property.module.css';

const PropertiesPageList = () => {
    const [location, setLocation] = useLocalStorage(
        'location',
        'All Locations'
    );
    const [type, setType] = useLocalStorage('type', 'All Types');

    const [formData, setFormdata] = useState({
        thelocation: '',
        thetype: '',
    });

    const { thelocation, thetype } = formData;

    useEffect(() => {
        setFormdata({
            ...formData,
            thelocation: window.localStorage.location,
            thetype: window.localStorage.type,
        });
        setLocation(window.localStorage.location);
        setType(window.localStorage.type);

        // eslint-disable-next-line
    }, []);

    const onChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
        setLocation(e.target.value);
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
        setType('All Types');
        setLocation('All Locations');
    };

    return (
        <div style={{ marginTop: 50 }}>
            <div className={propertyStyles.filtersection}>
                <Grid container spacing={0} justifyContent='center'>
                    <Grid item xs={12}>
                        <form noValidate className={propertyStyles.filterform}>
                            <Grid
                                container
                                alignItems='stretch'
                                className={propertyStyles.filterrow}
                            >
                                <Grid item xs={12}>
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
                                <Grid item xs={12}>
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
                                <Grid item xs={12}>
                                    <div className={propertyStyles.gobutton}>
                                        <Link href='/properties'>
                                            <a>
                                                <span>Search</span>{' '}
                                                <i className='fal fa-search'></i>
                                            </a>
                                        </Link>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
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
            </div>
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
            const item = window.localStorage.getItem(key);
            return item ? item : initialValue;
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

            window.localStorage.setItem(key, valueToStore);
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

export default PropertiesPageList;
