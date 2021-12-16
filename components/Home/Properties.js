import Link from 'next/link';
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';

const thelocations = [
    {
        thename: 'All Locations',
    },
    {
        thename: 'Brooklyn',
    },
    {
        thename: 'Queens',
    },
    {
        thename: 'Long Island',
    },
    {
        thename: 'Bronx',
    },
];

const Properties = ({ properties }) => {
    const [location, setLocation] = useLocalStorage(
        'location',
        'All Locations'
    );
    const [type, setType] = useLocalStorage('type', 'All Types');

    return (
        <div className='recent-listings'>
            <section>
                <Grid container spacing={3}>
                    <Grid item xs={12} className='title-section'>
                        <h2>Recent Listings</h2>
                        <div className='locations-cta'>
                            {thelocations.map((ll) => (
                                <Link href='/properties' key={ll.thename}>
                                    <a
                                        className='location-cta-btn'
                                        onClick={() => {
                                            setLocation(ll.thename),
                                                setType('All Types');
                                        }}
                                    >
                                        {ll.thename}
                                    </a>
                                </Link>
                            ))}
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
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((prt) => (
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
                        ))
                        .slice(0, 6)}
                </Grid>
                <Grid
                    container
                    spacing={3}
                    style={{ paddingTop: 50 }}
                    justifyContent='center'
                >
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={4}
                        style={{ textAlign: 'center' }}
                    >
                        <Link href='/properties'>
                            <a
                                className='red-btn'
                                onClick={() => {
                                    setLocation('All Locations'),
                                        setType('All Types');
                                }}
                            >
                                View all listings
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

// Hook
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

export default Properties;
