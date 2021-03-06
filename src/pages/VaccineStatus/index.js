import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VaccineCards from '../../components/VaccineCards/';
import { fetchVaccineStatus } from '../../api';
import {CountryPicker} from '../../components/';

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
    const [countryData, setCountryData] = useState(); 
    const [vaccineData, setVaccineData] = useState();
    const [worldData, setWorldData] = useState(); 
    const [country, setCountry] = useState();

    useEffect(() => {
        fetchData();
        
    }, [])


    const handleCountryChange = (country) => {
        setCountry(country)
        console.log('selected Country: ', country)
    }

    if(worldData && vaccineData && countryData){
        return(
            <div className={classes.container}>
                <img className={classes.image} alt="COVID-19" src="https://www.dhd10.org/wp-content/uploads/2020/12/covid19_Vaccine_Header.jpg"/>
            <VaccineCards worldData={worldData} countryData ={countryData} vaccineData={vaccineData}/>
            <CountryPicker data={countryData.map((c)=> c.location)} handleCountryChange={handleCountryChange}></CountryPicker>
            </div>
        );
    }else{
        return(<p>Loading...</p>)
    }
    

    async function fetchData(){
        const cData = await fetchVaccineStatus('country')
        const vData = await fetchVaccineStatus('vaccination')
        const wData = vData[119].data

        setVaccineData(vData)
        setWorldData(wData)
        setCountryData(cData)
            
    }
}