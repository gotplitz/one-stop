import { Fragment } from 'react';

import Footer from './Layout/Footer';
import TopBar from './Layout/TopBar';

const pages = [
    {
        id: 0,
        title: 'Home',
        slug: '',
    },
    {
        id: 1,
        title: 'About Us',
        slug: 'about-us',
    },
    {
        id: 2,
        title: 'Our Team',
        slug: 'our-team',
    },
    {
        id: 3,
        title: 'Our Clients',
        slug: 'our-clients',
    },
    {
        id: 4,
        title: 'Message For Developers',
        slug: 'message-for-developers',
    },
    {
        id: 5,
        title: 'News',
        slug: 'news',
    },
    {
        id: 6,
        title: 'Press',
        slug: 'press',
    },
    {
        id: 7,
        title: 'Contact Us',
        slug: 'contact-us',
    },
];

const Layout = ({ children }) => {
    return (
        <Fragment>
            <TopBar pages={pages} />
            <Fragment>{children}</Fragment>
            <Footer pages={pages} />
        </Fragment>
    );
};

export default Layout;
