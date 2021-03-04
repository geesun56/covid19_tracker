import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Cards, Chart, CountryPicker } from '../../components';
import {fetchData, fetchVaccineStatus} from '../../api';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container : {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    flexDirection: 'column',
    width: '100%',
    
  },
  image: {
    '@media (max-width: 770px)': {
        width: '100%'
    }
      
    }
    
  
  
}));

export default function CovidStatus() {
  const classes = useStyles();
  const [data, setData]= useState();
  const [selectedCountry, setCountry] = useState();

  useEffect(() => {
    dataLoading();

    const data = fetchVaccineStatus('country');
    
    fetchVaccineStatus('vaccination')
  }, [])

  const handleCountryChange = async (country) => {
    console.log(country)
    setCountry(country);
    const data = await fetchData(country);
    setData(data);

    

  }

  if(data == null){
      return (<p>Loading...</p>)
  }else{
    return (
        <div className={classes.container}>
            <img className={classes.image} alt="COVID-19" src="https://i.ibb.co/7QpKsCX/image.png"/>
            <Cards data ={data}></Cards>
            <CountryPicker data={data} handleCountryChange={handleCountryChange}></CountryPicker>
            <Chart data={data} country ={selectedCountry} ></Chart>
        </div>
    )
  }
    

    async function dataLoading(){
        const data = await fetchData();
        setData(data)
        
      }

}