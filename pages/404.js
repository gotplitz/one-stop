import Link from 'next/link';
import Head from 'next/head';
import { Fragment } from 'react';
import TopPages from '../components/Layout/TopPages';

const Custom404 = () => {
    return (
        <Fragment>
            <Head>
                <title>404 Error | One Stop Properties</title>
            </Head>
            <div className='all-body thank-you'>
                <TopPages
                    pagetitle='404 Error'
                    heroImage='warehouse-about-intro.jpg'
                />
                <section>
                    <h2>Page Not Found</h2>
                    <h4 style={{ marginBottom: 50 }}>
                        If you need assistance please call us at{' '}
                        <a href='tel:7187868400'>(718) 786-8400</a>.
                    </h4>
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

export default Custom404;
