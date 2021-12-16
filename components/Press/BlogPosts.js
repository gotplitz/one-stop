import { Grid } from '@material-ui/core';
import blogStyles from '../../styles/Blog.module.css';
import Moment from 'react-moment';

const BlogPosts = ({ posts }) => {
    return (
        <div className='blog-posts'>
            <section>
                <Grid container spacing={3} justifyContent='center'>
                    {posts &&
                        posts.length > 0 &&
                        posts
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map(
                                (bp) =>
                                    bp.newsstatus &&
                                    bp.newscat.includes('Press') && (
                                        <Grid key={bp._id} item xs={10}>
                                            <div
                                                className={`${blogStyles['blog-post']}`}
                                            >
                                                {/* <div
                                                    className={`images-container ${blogStyles['blog-posts']}`}
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
                                                </div> */}
                                                <div
                                                    className={`${blogStyles['blog-post-content']}`}
                                                >
                                                    <h4
                                                        className='heading-5'
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                bp.newstitle,
                                                        }}
                                                    ></h4>
                                                    <div
                                                        className={
                                                            blogStyles.time
                                                        }
                                                    >
                                                        <Moment format='MMMM DD, YYYY'>
                                                            {bp.date}
                                                        </Moment>
                                                    </div>
                                                    <div
                                                        className={`body-text ${blogStyles['body-text']}`}
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                bp.newsintro,
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={`body-text ${blogStyles['body-text']}`}
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                bp.newscontent,
                                                        }}
                                                    ></div>
                                                    {/* <Link
                                                        href={`/press/[newslink]`}
                                                        as={`/press/${bp.newslink}`}
                                                    >
                                                        <a className='red-btn'>
                                                            <small>
                                                                Read More
                                                            </small>{' '}
                                                            <i className='fal fa-long-arrow-right'></i>
                                                        </a>
                                                    </Link> */}
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                            )}
                </Grid>
            </section>
        </div>
    );
};

export default BlogPosts;
