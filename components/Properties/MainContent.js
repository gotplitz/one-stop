import { Grid } from '@material-ui/core';
import { useState, useEffect, Fragment } from 'react';
import propertyStyles from '../../styles/Property.module.css';

const MainContent = ({ currentloc }) => {
    return (
        <div
            className={`${propertyStyles.contentpage} properties-page-section`}
        >
            <section>
                <Grid
                    container
                    spacing={3}
                    className='title-section'
                    justifyContent='center'
                >
                    <Grid item xs={11} sm={8} md={7}>
                        {currentloc === 'All Locations' && (
                            <Fragment>
                                <h2>{allsp.title}</h2>
                                <div
                                    className='intro-text'
                                    dangerouslySetInnerHTML={{
                                        __html: allsp.content,
                                    }}
                                ></div>
                            </Fragment>
                        )}
                        {currentloc === 'Brooklyn' && (
                            <Fragment>
                                <h2>{brooklyn.title}</h2>
                                <div
                                    className='intro-text'
                                    dangerouslySetInnerHTML={{
                                        __html: brooklyn.content,
                                    }}
                                ></div>
                            </Fragment>
                        )}
                        {currentloc === 'Queens' && (
                            <Fragment>
                                <h2>{queens.title}</h2>
                                <div
                                    className='intro-text'
                                    dangerouslySetInnerHTML={{
                                        __html: queens.content,
                                    }}
                                ></div>
                            </Fragment>
                        )}
                        {currentloc === 'Long Island' && (
                            <Fragment>
                                <h2>{longisland.title}</h2>
                                <div
                                    className='intro-text'
                                    dangerouslySetInnerHTML={{
                                        __html: longisland.content,
                                    }}
                                ></div>
                            </Fragment>
                        )}
                        {currentloc === 'Bronx' && (
                            <Fragment>
                                <h2>{bronx.title}</h2>
                                <div
                                    className='intro-text'
                                    dangerouslySetInnerHTML={{
                                        __html: bronx.content,
                                    }}
                                ></div>
                            </Fragment>
                        )}
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

const allsp = {
    title: 'All Commercial Property Rentals',
    content: `When looking for a location in the 5 boroughs and Long Island, One Stop is your top choice. With flexible rates and dimensions, we offer many properties with land, warehouse, and office spaces for various commercial uses.

    At One Stop, we work closely with our tenants customizing their space to accommodate their operations. Reducing and expanding made simple! You choose the terms, and you choose the space. 
    
    Our month-to-month rentals allow you to adjust your space to your business needs with ease. Our on-site maintenance crew & management staff are ready to assist you with your new commercial space. The on-site maintenance team is present at all locations to offer snow removal, property clean-up & maintenance, debris removal, and site preparation cleaning.
    
    There is no one that does what we do, and it shows!`,
};

const brooklyn = {
    title: 'Commercial Space in Brooklyn',
    content: `Are you looking for a commercial space in Brooklyn, NY? We’ve got you covered! 

    One Stop Spaces owns a variety of commercial real estate buildings with land, warehouses, and office spaces to meet your needs. Our locations are primely located near Manhattan, Queens, and Long Island City, so you’ll be close and connected to the other surrounding NYC boroughs. 
    
    One Stop Spaces is sure to have the right space for you. Our locations range in size and are available to you for as long as you need. We work with you to ensure your ultimate satisfaction, and our excellent team is always here to assist you.
    
    Our commercial property maintenance crew and management staff are ready to assist you. We offer snow removal, property clean-up and maintenance, debris removal, and commercial site preparation cleaning to ensure that your space is prepared for you and your needs.
    `,
};

const queens = {
    title: 'Commercial Space in Queens',
    content: `The search for commercial space in Queens is finally over. Our buildings, many being minutes from Manhattan and Brooklyn, have a prime location that can't be beaten. 

    One Stop Spaces has dozens of commercial real estate with land, warehouses, and office spaces for any use within minutes of Manhattan. Any size you want and any length of time you need.
    
    We have dozens of options in the Tri-state area, so you're bound to find the perfect option to fit your needs. From office buildings to warehouses, One Stop Spaces has many choices for you. We allow the flexibility to add or reduce space based on your current needs. With us, you can expand and downsize your commercial real estate easily.
    
    Our commercial property maintenance crew and management staff are always ready to assist you. We offer snow removal, property clean-up and maintenance, debris removal, and commercial site preparation cleaning.`,
};

const longisland = {
    title: 'Commercial Rental Space on Long Island, NY',
    content: `When looking for a location on Long Island, NY, One Stop is your top choice for all your commercial needs. Let us know what you're looking for and we'll find the perfect suitable space for you, with no extra work required from you. Action-oriented and customer-focused, our landlord-tenant relationships are like no other, and our month-to-month rent allows for easy flexibility. Downsize or upgrade to fit your business needs with ease.

    With our on-site maintenance crew & management staff, you’ll have a team ready to assist you with your new commercial space offering snow removal, property clean-up & maintenance, debris removal, and site preparation cleaning. Our passion for our clients drives everything we do.
     
    Whether you need production, creative, garage, or showroom space, we have your business covered!`,
};

const bronx = {
    title: 'Commercial Space in The Bronx',
    content: `If you need a commercial space in The Bronx, NY, look no further than One Stop Spaces. We’ve got just what you’re looking for!

    Here at One Stop Spaces, we have plenty of commercial real estate buildings with land, warehouses, and office spaces available for rent to meet your needs. Our properties come in a variety of sizes and are available to you for as long as you need.
    
    Our commercial property maintenance crew and management staff are ready to assist you. We offer snow removal, property clean-up and maintenance, debris removal, and commercial site preparation cleaning to have your property ready for you to use.
    
    The team at One Stop Spaces is ready to work with you to get the commercial property in The Bronx you need.`,
};

export default MainContent;
