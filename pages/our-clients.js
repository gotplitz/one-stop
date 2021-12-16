import Head from 'next/head';
import { Fragment, useState, useEffect } from 'react';

// Parts
import CallToAction from '../components/Home/CallToAction';
import Spinning from '../components/Extras/Spinning';
import TopPages from '../components/Layout/TopPages';
import MainContent from '../components/Clients/MainContent';
import ClientsList from '../components/Clients/ClientsList';

const OurClients = ({ clients }) => {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GetLogos = () => {
            setLogos([]);

            const orderClients = clients.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );

            orderClients.forEach((lg) => {
                let img = new Image();
                img.src = `https://admin.onestopspaces.com/uploads/${lg.featuredimg}`;
                img.onload = () => {
                    setLogos((logos) => [
                        ...logos,
                        {
                            logofile: img.src,
                            width: img.width,
                            height: img.height,
                        },
                    ]);
                };
            });
        };

        return GetLogos();
    }, [clients]);

    useEffect(() => {
        const ChangeLoader = () => {
            if (logos.length === clients.length) {
                setLoading(false);
            }
        };

        return ChangeLoader();
    }, [logos]);

    console.log(clients);
    return (
        <Fragment>
            <Head>
                <title>Our Clients | One Stop Properties</title>
            </Head>
            <div className='home-body properties-page'>
                <TopPages
                    pagetitle={'Our Clients'}
                    heroImage={'remy-gieling-qqtE2yX7POI-unsplash-1240x720.jpg'}
                />
                {loading ? (
                    <Spinning />
                ) : (
                    <Fragment>
                        <MainContent />
                        <ClientsList logos={logos} />
                        <CallToAction />
                    </Fragment>
                )}
            </div>
        </Fragment>
    );
};

export const getServerSideProps = async () => {
    const clientsdata = await fetch(`http://localhost:5082/api/tenants`);
    const clients = await clientsdata.json();

    return {
        props: {
            clients,
        },
    };
};

export default OurClients;
