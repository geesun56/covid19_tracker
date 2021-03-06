import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CovidCards, Chart, CountryPicker } from '../../components';
import {fetchData, fetchVaccineStatus,fetchCountries } from '../../api';
import covidImage from '../../assets/images/covid_image.jpg'

const useStyles = makeStyles((theme) => ({
  
  container : {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop: '40px'
  },
  image: {
    width: '25%',
    '@media (max-width: 770px)': {
        width: '90%'
    }
      
    }
    
  
  
}));

export default function CovidStatus(props) {
  const classes = useStyles();
  const [data, setData]= useState();
  const [selectedCountry, setCountry] = useState();
  const [countries, setCountries] = useState();
  useEffect(() => {
    dataLoading();
    getCountries();
    
  }, [])

  const handleCountryChange = async (country) => {
    console.log(country)
    setCountry(country);
    const data = await fetchData(country);
    setData(data);
     
    

  }

  const getCountries = async () => {
    const rows = await fetchCountries()
    .then((rows) => {
        console.log(rows)
        setCountries(rows)
        });
}



  if(data == null && countries == null){
      return (<p>Loading...</p>)
  }else{
    return (
        <div className={classes.container}>
            <img className={classes.image} alt="COVID-19" src={covidImage}/>
            <CovidCards data ={data}></CovidCards>
            <CountryPicker countries={countries} handleCountryChange={handleCountryChange}></CountryPicker>
            <Chart data={data} country ={selectedCountry} ></Chart>
        </div>
    )
  }
    

    async function dataLoading(){
        const data = await fetchData();
        setData(data)
        
      }

}