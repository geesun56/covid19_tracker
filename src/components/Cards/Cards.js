import React from 'react';
import './Cards.module.css'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = (props)  => {

    
    const {data} = props

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card} xs={12} md={6} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="secondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start ={0} end={data.confirmed.value} duration ={2} separator=","/>
                    </Typography>
                    <Typography color="primary">{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="secondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start ={0} end={data.recovered.value} duration ={2} separator=","/>
                    </Typography>
                    <Typography color="primary">{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="secondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start ={0} end={data.deaths.value} duration ={2} separator=","/>
                    </Typography>
                    <Typography color="primary">{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}


export default Cards;
