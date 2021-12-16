import { Grid } from '@material-ui/core';
import aboutStyles from '../../styles/About.module.css';
import Image from 'next/image';

const TeamList = () => {
    return (
        <div className={aboutStyles.teamwrap}>
            <section>
                <Grid container spacing={7} justifyContent='center'>
                    {teammembers.map((tm) => (
                        <Grid item xs={12} sm={6} md={4} key={tm.teamname}>
                            <div className={aboutStyles.memberwrap}>
                                <div className='image-wrap'>
                                    <Image
                                        src={`/images/${tm.image}`}
                                        alt={tm.teamname}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className={aboutStyles.caption}>
                                    <h4>{tm.teamname}</h4>
                                    <p>{tm.position}</p>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </section>
        </div>
    );
};

const teammembers = [
    {
        teamname: 'Alan Dern',
        position: 'CEO',
        image: 'alan-dern-one-stop-properties.jpg',
    },
    {
        teamname: 'Doug J Bauer',
        position: 'CFO',
        image: 'doug-bauer-one-stop-properties-768x768.jpg',
    },
    {
        teamname: 'James Slattery',
        position: 'General Manager',
        image: 'james-slattery-one-stop-properties-768x768.jpg',
    },
    {
        teamname: 'Mike Dern',
        position: 'Director of Field Operations & Property Manager',
        image: 'mike-dern-one-stop-properties-768x768.jpg',
    },
    {
        teamname: 'Kyle Anderson',
        position: 'Director of Media',
        image: 'kyle.png',
    },
    {
        teamname: 'Nicole Anderson',
        position: 'Office Manager',
        image: 'nicole-anderson-one-stop-properties-768x768.jpg',
    },
    {
        teamname: 'Christina Reyes',
        position: 'Administration',
        image: 'christina-reyes-one-stop-properties-768x768.jpg',
    },
    {
        teamname: 'Cristalee Villafana',
        position: 'Administration',
        image: 'cristalee-villafana-one-stop-properties-768x768.jpg',
    },
    {
        teamname: 'Yamilet Acevedo',
        position: 'Administration',
        image: 'yamilet-acevedo-one-stop-properties-768x768.jpg',
    },
    {
        teamname: 'Lauren Tursi',
        position: 'Receptionist',
        image: 'lauren.png',
    },
];

export default TeamList;
