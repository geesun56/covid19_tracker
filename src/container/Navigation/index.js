import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Toolbar} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100vw'
  },
  spacer:{
    width: 'inherit',
    height: '112px'
  }
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
      <AppBar color="primary" position="fixed">
      <Toolbar>
      <Typography variant="h6" className={classes.title}>
            COVID-19 Tracker
          </Typography>
      </Toolbar>
        <Tabs  value={value} onChange={handleChange} aria-label="menu">
          <Tab
            value="covid"
            label="COVID-19"
            
          />
          <Tab value="vaccince" label="Vaccination" />
          
        </Tabs>
      

      </AppBar>
      <div class={classes.spacer}>
      &nbsp;
      </div>
    </div>
  );
}