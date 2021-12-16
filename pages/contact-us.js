import Head from 'next/head';
import { Fragment } from 'react';

import ContactMap from '../components/Contacts/ContactMap';
import TopPages from '../components/Layout/TopPages';
import MainContent from '../components/Contacts/MainContent';

const ContactUs = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Us | One Stop Properties</title>
            </Head>
            <div className='home-body properties-page'>
                <TopPages
                    pagetitle={'Contact Us'}
                    heroImage={
                        'Commercial-lease-brooklyn-queens-one-stop-properties.jpg'
                    }
                />
                <MainContent />
                <ContactMap />
            </div>
        </Fragment>
    );
};

export default ContactUs;
