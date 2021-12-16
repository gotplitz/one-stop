import Link from 'next/link';
import Head from 'next/head';
import { Fragment } from 'react';
import TopPages from '../components/Layout/TopPages';

const Custom500 = () => {
    return (
        <Fragment>
            <Head>
                <title>500 Error | One Stop Properties</title>
            </Head>
            <div className='all-body thank-you'>
                <TopPages
                    pagetitle='500 Error'
                    heroImage='warehouse-about-intro.jpg'
                />
                <section>
                    <h2>Server-side error ocurred</h2>
                    <div className='cta-button'>
                        <Link href='/'>
                            <a className='btn'>Back to Home</a>
                        </Link>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export const getStaticProps = async () => {
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

export default Custom500;
