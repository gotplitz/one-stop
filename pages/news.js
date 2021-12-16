import Head from 'next/head';
import { Fragment } from 'react';

// Parts
import BlogPosts from '../components/News/BlogPosts';
import CallToAction from '../components/Home/CallToAction';
import TopPages from '../components/Layout/TopPages';

const News = ({ posts }) => {
    var filterout = [];
    posts &&
        posts.map(
            (el) =>
                el.newsstatus &&
                el.newscat.includes('News') &&
                filterout.push(el)
        );
    return (
        <Fragment>
            <Head>
                <title>News | One Stop Properties | Roofing & Siding</title>
            </Head>
            <div className='all-body'>
                <TopPages
                    pagetitle={'News'}
                    heroImage={'warehouse-view-news.jpg'}
                />
                <BlogPosts filterout={filterout} />
                <CallToAction />
            </div>
        </Fragment>
    );
};

export const getServerSideProps = async () => {
    const blogdata = await fetch(`http://localhost:5082/api/noticias`);
    const posts = await blogdata.json();

    return {
        props: {
            posts,
        },
    };
};

export default News;
