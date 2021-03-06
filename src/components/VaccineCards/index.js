import React, {useEffect} from 'react';

import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  
    container: {
        margin: '50px 0'
    },
    
    card: {
        margin: '0 0%',
        width: 'auto',

        '@media(max-width: 770px)': {
       
            margin: '2% 0 !important'
       
    }
    },
    
    total_count: {
        borderBottom: '10px solid rgba(0,0,255,0.5)'
    },
    
    total_rate: {
        borderBottom: '10px solid rgba(0,255,0,0.5)'
    },
    
    full_vaccine: {
        borderBottom: '10px solid rgba(255,0,0,0.5)'
    },
}));
    
    

export default function VaccineCards(props){

    const classes = useStyles();
    const {countryData, vaccineData, worldData} = props

    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <div className={classes.container}>
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card} xs={12} md={4} className={cx(classes.card, classes.total_count)}>
                <CardContent>
                    <Typography color="secondary" gutterBottom>Global Vaccination</Typography>
                    <Typography variant="h5">
                        <CountUp start ={0} end={worldData[worldData.length-1].total_vaccinations} duration ={2} separator=","/>
                    </Typography>
                    <Typography color="primary">{new Date(worldData[worldData.length-1].date).toDateString()}</Typography>
                    <Typography variant="body2">Number of global COVID-19 vaccination</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={4} className={cx(classes.card, classes.total_rate)}>
                <CardContent>
                    <Typography color="secondary" gutterBottom>Global Full Vaccination (2 shots) </Typography>
                    <Typography variant="h5">
                        <CountUp start ={0} end={worldData[worldData.length-1].people_fully_vaccinated} duration ={2} separator=","/>
                    </Typography>
                    <Typography color="primary">{new Date(worldData[worldData.length-1].date).toDateString()}</Typography>
                    <Typography variant="body2">Number of global full vaccination (people who have taken 2 shots)  </Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={4} className={cx(classes.card, classes.full_vaccine)}>
                <CardContent>
                    <Typography color="secondary" gutterBottom>Global Vaccination Rate</Typography>
                    <Typography variant="h5">
                        {worldData[worldData.length-1].people_fully_vaccinated_per_hundred}%
                    </Typography>
                    <Typography color="primary">{new Date(worldData[worldData.length-1].date).toDateString()}</Typography>
                    <Typography variant="body2">Global vaccination rate for those who have taken two shots</Typography>
                </CardContent>
                </Grid>

                
            </Grid>
        </div>
    )
}


