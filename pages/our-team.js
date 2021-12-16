import Head from 'next/head';
import { Fragment } from 'react';
import CallToAction from '../components/Home/CallToAction';

import TopPages from '../components/Layout/TopPages';
import MainContent from '../components/Team/MainContent';
import TeamList from '../components/Team/TeamList';

const OurTeam = () => {
    return (
        <Fragment>
            <Head>
                <title>Our Team | One Stop Properties</title>
            </Head>
            <div className='home-body properties-page'>
                <TopPages
                    pagetitle={'Our Team'}
                    heroImage={'people-walkin-in-warehouse.jpg'}
                />
                <MainContent />
                <TeamList />
                <CallToAction />
            </div>
        </Fragment>
    );
};

export default OurTeam;
