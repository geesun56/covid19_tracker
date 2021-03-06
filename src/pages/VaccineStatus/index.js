import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VaccineCards from '../../components/VaccineCards/';
import { fetchVaccineStatus } from '../../api';
import {CountryPicker} from '../../components/';
import VaccineImage from '../../assets/images/vaccine_image.jpg';
import VaccineChart from '../../components/VaccineChart/'

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
    const [graphData, setGraphData] = useState();

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
                <img className={classes.image} alt="COVID-19" src={VaccineImage}/>
            <VaccineCards worldData={worldData} countryData ={countryData} vaccineData={vaccineData}/>
            <CountryPicker countries={vaccineData.map((c)=> c.country)} handleCountryChange={handleCountryChange}></CountryPicker>
            <VaccineChart data = {vaccineData} country={country}/>
            </div>
        );
    }else{
        return(<p>Loading...</p>)
    }
    

    async function fetchData(){
        const cData = await fetchVaccineStatus('country')
        const vData = await fetchVaccineStatus('vaccination')
        const wData = vData.find(r => r.country == 'World')
        
        setVaccineData(vData)
        setWorldData(wData.data)
        setCountryData(cData)

    }

    
}