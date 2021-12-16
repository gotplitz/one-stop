import Head from 'next/head';
import { Fragment } from 'react';
import CallToAction from '../components/Home/CallToAction';

import TopPages from '../components/Layout/TopPages';
import MainContent from '../components/Developers/MainContent';

const MessageDevelopers = () => {
    return (
        <Fragment>
            <Head>
                <title>Messages for Developers | One Stop Properties</title>
            </Head>
            <div className='home-body properties-page'>
                <TopPages
                    pagetitle={'Messages for Developers'}
                    heroImage={
                        'Commercial-lease-brooklyn-queens-one-stop-properties.jpg'
                    }
                />
                <MainContent />
                <CallToAction />
            </div>
        </Fragment>
    );
};

export default MessageDevelopers;
