import Head from 'next/head';

// Parts
import AboutIntro from '../components/About/AboutIntro';
import TopPages from '../components/Layout/TopPages';
import CallOut from '../components/Layout/CallOut';
import ServiceLike from '../components/About/ServiceLike';
import CallToAction from '../components/Home/CallToAction';

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us | One Stop Properties</title>
            </Head>
            <div className='all-body about-us'>
                <TopPages
                    pagetitle={'About One Stop Spaces'}
                    heroImage={'man-in-truck-receiving-instructions.jpg'}
                />
                <AboutIntro />
                <CallOut
                    sectionTitle={
                        'No matter what your business needs, we have you covered!'
                    }
                    intro={''}
                />
                <ServiceLike />
                <CallToAction />
            </div>
        </>
    );
};

export const getServerSideProps = async () => {
    const propertiesdata = await fetch(`http://localhost:5082/api/properties`);
    const properties = await propertiesdata.json();

    const tenantdata = await fetch(`http://localhost:5082/api/tenants`);
    const tenants = await tenantdata.json();

    const repairdata = await fetch(`http://localhost:5082/api/repairs`);
    const repairs = await repairdata.json();

    return {
        props: {
            properties,
            tenants,
            repairs,
        },
    };
};

export default AboutUs;
