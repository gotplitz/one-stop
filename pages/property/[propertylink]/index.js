import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';

// Parts
import TopPages from '../../../components/Properties/TopPages';
import TopPagesTwo from '../../../components/Properties/TopPagesTwo';
import PropeBody from '../../../components/Properties/PropeBody';
import CallToAction from '../../../components/Home/CallToAction';
import RelatedProps from '../../../components/Properties/RelatedProps';

const Properties = ({ prope, properties }) => {
    const [galExist, setGalexist] = useState(false);

    useEffect(() => {
        function goSlides() {
            if (prope.gallery && prope.gallery.length > 0) {
                setGalexist(true);
            } else {
                setGalexist(false);
            }
        }

        return goSlides();
    }, [prope.gallery]);

    return (
        <Fragment>
            <Head>
                <title>{prope.propertytitle} | One Stop Properties</title>
                <meta
                    name='description'
                    content={prope.propertydetails.replace(/<[^>]+>/g, '')}
                />
            </Head>
            <div className='all-body'>
                {galExist ? (
                    <TopPages prope={prope} />
                ) : (
                    <TopPagesTwo prope={prope} />
                )}
                <PropeBody prope={prope} />
                <CallToAction />
                <RelatedProps
                    properties={properties}
                    loc={prope.propertylocation}
                    thist={prope.propertytitle}
                />
            </div>
        </Fragment>
    );
};

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `http://localhost:5082/api/properties/${context.params.propertylink}`
    );
    const prope = await res.json();

    const propertiesdata = await fetch(`http://localhost:5082/api/properties`);
    const properties = await propertiesdata.json();

    return {
        props: {
            prope,
            properties,
        },
    };
};

export default Properties;
