import Head from 'next/head';
import { Fragment, useState } from 'react';

import TopPages from '../components/Layout/TopPages';
import PropertiesPageList from '../components/Properties/PropertiesPageList';
import MainContent from '../components/Properties/MainContent';

const Properties = ({ properties }) => {
    const [loc, setLoc] = useState();
    return (
        <Fragment>
            <Head>
                <title>Our Properties | One Stop Properties</title>
            </Head>
            <div className='home-body properties-page'>
                <TopPages
                    pagetitle={'Our Properties'}
                    currentloc={loc}
                    heroImage={'people-walkin-in-warehouse.jpg'}
                />
                <PropertiesPageList properties={properties} setLoc={setLoc} />
                <MainContent currentloc={loc} />
            </div>
        </Fragment>
    );
};

export const getServerSideProps = async () => {
    const propertiesdata = await fetch(`http://localhost:5082/api/properties`);
    const properties = await propertiesdata.json();

    return {
        props: {
            properties,
        },
    };
};

export default Properties;
