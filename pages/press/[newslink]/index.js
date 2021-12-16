import Head from 'next/head';
import { Fragment } from 'react';

// Parts
import TopPages from '../../../components/Press/TopPages';
import MainContent from '../../../components/Press/MainContent';
import CallToAction from '../../../components/Home/CallToAction';

const blog = ({ post, posts }) => {
    return (
        <Fragment>
            <Head>
                <title>
                    {post.newstitle} | One Stop Properties | Roofing & Siding
                </title>
                <meta name='description' content={post.newsintro} />
            </Head>
            <TopPages pagetitle={post.newstitle} heroImage={post.featuredimg} />
            <MainContent post={post} posts={posts} />
            <CallToAction />
        </Fragment>
    );
};

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `http://localhost:5082/api/noticias/${context.params.newslink}`
    );
    const post = await res.json();

    const postsdata = await fetch(`http://localhost:5082/api/noticias`);
    const posts = await postsdata.json();

    return {
        props: {
            post,
            posts,
        },
    };
};

export default blog;
