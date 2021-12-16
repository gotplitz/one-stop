import { Grid } from '@material-ui/core';
import blogStyles from '../../styles/Blog.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Moment from 'react-moment';

import SmallFilter from '../Properties/SmallFilter';

const MainContent = ({ post, posts }) => {
    return (
        <div className='info-section blog-post'>
            <section>
                <Grid container justifyContent='center' spacing={7}>
                    <Grid item xs={12} sm={11} md={10} lg={8}>
                        <div style={{ padding: '10px 0' }}>
                            <div className='images-container'>
                                <Image
                                    src={`https://admin.onestopspaces.com/uploads/${post.featuredimg}`}
                                    alt={post.newstitle}
                                    layout='fill'
                                />
                            </div>
                            <div
                                className='body-text'
                                style={{ color: '#646464', margin: '50px 0' }}
                            >
                                <b
                                    dangerouslySetInnerHTML={{
                                        __html: post.newsintro,
                                    }}
                                ></b>
                            </div>
                            <div
                                className='body-text'
                                dangerouslySetInnerHTML={{
                                    __html: post.newscontent,
                                }}
                            ></div>
                        </div>
                    </Grid>
                    <Grid item xs={11} sm={9} md={7} lg={4}>
                        <div className={blogStyles.sidebar}>
                            <div className={blogStyles.contacts}>
                                <div className={blogStyles.postlist}>
                                    <h5
                                        style={{
                                            marginBottom: 40,
                                            color: '#1c1c1c',
                                        }}
                                    >
                                        News & Press
                                    </h5>
                                    {posts.slice(0, 5).map((pt) => (
                                        <div
                                            className='latests-posts'
                                            key={pt.newslink}
                                        >
                                            <Link
                                                href={
                                                    pt.newscat.includes('News')
                                                        ? `/news/[newslink]`
                                                        : `/press/[newslink]`
                                                }
                                                as={`/${
                                                    pt.newscat.includes('News')
                                                        ? `news`
                                                        : `press`
                                                }/${pt.newslink}`}
                                            >
                                                <a>
                                                    <span>{pt.newstitle}</span>
                                                    <br />
                                                    <Moment format='MMMM DD, YYYY'>
                                                        {pt.date}
                                                    </Moment>
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <div className={blogStyles.postlist}>
                                    <h5
                                        style={{
                                            marginBottom: 40,
                                            color: '#1c1c1c',
                                        }}
                                    >
                                        Find a Property
                                    </h5>
                                    <SmallFilter />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default MainContent;
