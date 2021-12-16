import { Grid } from '@material-ui/core';
import Link from 'next/link';
import blogStyles from '../../styles/Blog.module.css';
import Image from 'next/image';
import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import Paginator from 'react-hooks-paginator';

const BlogPosts = ({ filterout }) => {
    const pageLimit = 5;

    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        setCurrentData(
            filterout && filterout.slice(offset, offset + pageLimit)
        );

        const allbuttons = document.querySelectorAll('.page-link');
        allbuttons.forEach((el) =>
            el.addEventListener('click', (e) => {
                e.preventDefault();
                window.scroll({
                    top: 0,
                    left: 0,
                });
            })
        );

        // eslint-disable-next-line
    }, [offset, filterout]);

    return (
        <div className='blog-posts'>
            <section>
                <Grid container spacing={3} justifyContent='center'>
                    {currentData &&
                        currentData.length > 0 &&
                        currentData
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map((bp) => (
                                <Grid key={bp._id} item xs={10}>
                                    <div
                                        className={`${blogStyles['blog-post']}`}
                                    >
                                        <div
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
                                        </div>
                                        <div
                                            className={`${blogStyles['blog-post-content']}`}
                                        >
                                            <h4
                                                className='heading-5'
                                                dangerouslySetInnerHTML={{
                                                    __html: bp.newstitle,
                                                }}
                                            ></h4>
                                            <div className={blogStyles.time}>
                                                <Moment format='MMMM DD, YYYY'>
                                                    {bp.date}
                                                </Moment>
                                            </div>
                                            <div
                                                className={`body-text ${blogStyles['body-text']}`}
                                                dangerouslySetInnerHTML={{
                                                    __html: bp.newsintro,
                                                }}
                                            ></div>
                                            <Link
                                                href={`/news/[newslink]`}
                                                as={`/news/${bp.newslink}`}
                                            >
                                                <a className='red-btn'>
                                                    <small>Read More</small>{' '}
                                                    <i className='fal fa-long-arrow-right'></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                </Grid>
                <Grid container spacing={3} style={{ margin: '70px 0 30px' }}>
                    <Grid item xs={12}>
                        <nav className='pagination'>
                            {filterout && (
                                <Paginator
                                    totalRecords={filterout.length}
                                    pageLimit={pageLimit}
                                    pageNeighbours={2}
                                    setOffset={setOffset}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    pageContainerClass=' '
                                    pageActiveClass='current-page'
                                    pageNextText={
                                        <i className='fal fa-long-arrow-right'></i>
                                    }
                                    pageNextClass='pagination-arrow'
                                    pagePrevText={
                                        <i className='fal fa-long-arrow-left'></i>
                                    }
                                    pagePrevClass='pagination-arrow'
                                />
                            )}
                        </nav>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default BlogPosts;
