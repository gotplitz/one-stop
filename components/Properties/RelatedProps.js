import Link from 'next/link';
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import calloutStyles from '../../styles/CallOut.module.css';

const RelatedProps = ({ properties, loc, thist }) => {
    const [getOne, setGetone] = useState();

    useEffect(() => {
        loc.forEach((el) => {
            if (el !== 'All Locations') {
                setGetone(el);
            }
        });
    }, [loc]);

    var finalarray = [];

    properties
        .sort(() => 0.5 - Math.random())
        .map(
            (prt) =>
                prt.propertylocation.includes(getOne) &&
                prt.propertytitle !== thist &&
                finalarray.push(prt)
        );

    return (
        <div className='recent-listings related-list properties-page-section'>
            <section>
                <div className={`${calloutStyles['callout-intro']}`}>
                    <h3 className={`${calloutStyles['related-title']}`}>
                        More Properties in this Location
                    </h3>
                </div>
                <Grid
                    container
                    spacing={3}
                    justifyContent='center'
                    alignItems='stretch'
                >
                    {finalarray
                        .map((pr) => (
                            <Grid key={pr._id} item xs={12} sm={6} md={4}>
                                <Link
                                    href='/property/[propertylink]'
                                    as={`/property/${pr.propertylink}`}
                                >
                                    <a className='property-btn'>
                                        <div className='property-item'>
                                            <div className='property-image'>
                                                <Image
                                                    src={`https://admin.onestopspaces.com/uploads/${pr.featuredimg}`}
                                                    alt={pr.propertytitle}
                                                    width='1024'
                                                    height='800'
                                                />
                                            </div>
                                            <div className='property-content'>
                                                <div className='property-title'>
                                                    {pr.propertytitle}
                                                </div>
                                                <div className='property-address'>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                pr.propertyaddress,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </Grid>
                        ))
                        .slice(0, 3)}
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
        thetype: 'Garage',
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
        thetype: 'Combo: Warehouse & Land',
    },
    {
        thetype: 'Combo: Office & Land',
    },
    {
        thetype: 'Combo: Office/Land/Warehouse',
    },
    {
        thetype: 'Combo: Office and Warehouse',
    },
];

export default RelatedProps;
