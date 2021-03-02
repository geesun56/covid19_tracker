import React, {useEffect, useState} from 'react';
import styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components';
import {fetchData} from './api/';

function App() {
  
  const [data, setData]= useState();
  const [selectedCountry, setCountry] = useState();

  useEffect(() => {
    dataLoading();
  }, [])

  const handleCountryChange = async (country) => {
    console.log(country)
    setCountry(country);
    const data = await fetchData(country);
    setData(data);
  }

  if(!data){
    return "Loading!!"
  }

    return (
      <div className={styles.container}>
        <img className={styles.image} alt="COVID-19" src="https://i.ibb.co/7QpKsCX/image.png"/>
        <Cards data ={data}></Cards>
        <CountryPicker data={data} handleCountryChange={handleCountryChange}></CountryPicker>
        <Chart data={data} country ={selectedCountry} ></Chart>

      </div>
    );

  async function dataLoading(){
    const data = await fetchData();
    setData(data)
    
  }
}


export default App;
