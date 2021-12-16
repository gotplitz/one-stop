import { Grid } from '@material-ui/core';

const ClientsList = ({ logos }) => {
    return (
        <div className='clients-container'>
            <section style={{ paddingTop: 0 }}>
                <Grid
                    container
                    spacing={7}
                    justifyContent='center'
                    alignItems='stretch'
                >
                    {logos &&
                        logos.length > 0 &&
                        logos.map((prt) => (
                            <Grid key={prt._id} item xs={12} sm={6} md={4}>
                                <div className='property-item client-item'>
                                    <div className='property-image'>
                                        <img
                                            src={prt.logofile}
                                            alt={prt.propertytitle}
                                            width={prt.width}
                                            height={prt.height}
                                        />
                                    </div>
                                </div>
                            </Grid>
                        ))}
                </Grid>
            </section>
        </div>
    );
};

export default ClientsList;
