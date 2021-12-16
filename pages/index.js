import Head from 'next/head';
import { Fragment } from 'react';

// Parts
import MainSlider from '../components/Home/MainSlider';
import Properties from '../components/Home/Properties';
import MainContent from '../components/Home/MainContent';
import CallToAction from '../components/Home/CallToAction';

export default function Home({ sliders, properties }) {
    return (
        <Fragment>
            <Head>
                <title>One Stop Properties</title>
            </Head>
            <div className='home-body'>
                <MainSlider sliders={sliders} />
                <Properties properties={properties} />
                <MainContent />
                <CallToAction />
            </div>
        </Fragment>
    );
}

export const getServerSideProps = async () => {
    const propertiesdata = await fetch(`http://localhost:5082/api/properties`);
    const properties = await propertiesdata.json();

    const slidersdata = await fetch(`http://localhost:5082/api/sliders`);
    const sliders = await slidersdata.json();

    return {
        props: {
            properties,
            sliders,
        },
    };
};
