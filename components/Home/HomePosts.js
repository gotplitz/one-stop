import { Grid } from '@material-ui/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import homeStyles from '../../styles/Home.module.css';
import Image from 'next/image';
import Moment from 'react-moment';

import Spinning from '../Extras/Spinning';

const HomePosts = ({ posts }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (posts && posts.length !== 0) {
            setLoading(false);
        }

        return null;

        // eslint-disable-next-line
    }, []);

    return (
        <div className='blog-posts'>
            <section>
                <Grid container spacing={5} justifyContent='center'>
                    <Grid item xs={10}>
                        <h3 className='heading-3 text-center'>
                            CT Roofing Blog
                        </h3>
                    </Grid>
                </Grid>
                {loading ? (
                    <Spinning />
                ) : (
                    <Grid container spacing={3} justifyContent='center'>
                        {posts &&
                            posts.length > 0 &&
                            posts
                                .sort(
                                    (a, b) =>
                                        new Date(a.date) - new Date(b.date)
                                )
                                .map(
                                    (bp) =>
                                        bp.newsstatus && (
                                            <Grid
                                                key={bp._id}
                                                item
                                                xs={12}
                                                sm={6}
                                                md={4}
                                            >
                                                <div
                                                    className={`${homeStyles['blog-post']}`}
                                                >
                                                    <div
                                                        className={`images-container ${homeStyles['home-posts']}`}
                                                    >
                                                        {bp.featuredimg ===
                                                        'big-placeholder.jpg' ? (
                                                            <img
                                                                alt='Water Dr vans in a sunset'
                                                                src={`/images/${bp.featuredimg}`}
                                                            />
                                                        ) : (
                                                            <Image
                                                                src={`https://admin.onestopspaces.com/uploads/${bp.featuredimg}`}
                                                                alt={`${bp.newstitle}`}
                                                                layout='fill'
                                                            />
                                                        )}
                                                    </div>
                                                    <div
                                                        className={`${homeStyles['blog-post-content']}`}
                                                    >
                                                        <h4
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    bp.newstitle,
                                                            }}
                                                        ></h4>
                                                        <div
                                                            className={
                                                                homeStyles.time
                                                            }
                                                        >
                                                            <Moment format='MMMM DD, YYYY'>
                                                                {bp.date}
                                                            </Moment>
                                                        </div>
                                                        <div
                                                            className='body-text'
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    bp.newsintro,
                                                            }}
                                                        ></div>
                                                        <Link
                                                            href={`/blog/[newslink]`}
                                                            as={`/blog/${bp.newslink}`}
                                                        >
                                                            <a>
                                                                <small className='accent-text'>
                                                                    Read More
                                                                </small>{' '}
                                                                <i className='fal fa-long-arrow-right'></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Grid>
                                        )
                                )}
                    </Grid>
                )}
            </section>
        </div>
    );
};

export default HomePosts;
