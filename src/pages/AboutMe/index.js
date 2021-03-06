import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  
    container : {
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'center',
      flexDirection: 'column',
      width: '100%',
      marginTop: '40px'
    },
    image: {
        width: '30%',

      '@media (max-width: 770px)': {
          width: '90%'
      }
        
      }
      
    
    
  }));

  

export default function VaccineStatus(){
    const classes = useStyles();
    

    useEffect(() => {
        
        

    }, [])


    
        return(
            <div className={classes.container}>
                <img className={classes.image} alt="COVID-19" src={'https://img.huffingtonpost.com/asset/603de8323f0000d608a3f5b7.jpg?ops=scalefit_630_noupscale'}/>
            </div>
        );
    
    

    
}