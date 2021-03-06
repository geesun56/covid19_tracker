import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import {Toolbar} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100vw'
  },
  spacer:{
    width: 'inherit',
    height: '48px',
    "@media (max-width: 770px)":{
      height: '100px'
    }
  },
  title:{
    flexGrow: 1,
    "@media (max-width: 770px)":{
      width: '100%',
      padding: '15px 0 5px 20px'
    }
  },

  tabs:{
    "@media (max-width: 770px)":{
      alignSelf:'flexEnd'
      
    }
  },
  toolbar:{
    minHeight: '48px',
    
    "@media (max-width: 770px)":{
      alignSelf:'flexEnd',
      display: 'block',
      paddingLeft: 0
    }
  }
}));

        
export default function TabsWrappedLabel(props) {
  const classes = useStyles();
  const {menu, setMenu} = props;


  const handleChange = (event, newMenu) => {
    setMenu(newMenu);
    console.log(newMenu)
  };

  return (
    <div className={classes.root}>
      
      <AppBar color="primary" position="fixed">
      <Toolbar className={classes.toolbar} >
      <Typography variant="h6" className={classes.title}>
            COVID-19 Tracker 
          </Typography>
          
          <Tabs className={classes.tabs} value={menu} onChange={handleChange} aria-label="menu">
          <Tab
            value="covid"
            label="COVID-19"
          />
          <Tab value="vaccine" label="Vaccination" />
          <Tab value="heart" label="" icon={<FavoriteIcon color="secondary"/>} />
          
        </Tabs>
      </Toolbar>

      </AppBar>
      <div className={classes.spacer}>
        
              </div>
    </div>
  );
}