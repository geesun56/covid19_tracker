import React, {useEffect, useState} from 'react';
import styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components';
import {fetchData} from './api/';

function App() {
  
  const [data, setData]= useState();

  useEffect(() => {
    dataLoading();
  }, [])


  if(!data){
    return "Loading!!"
  }

    return (
      <div className={styles.container}>
        <Cards data ={data}></Cards>
        <Chart data={data}></Chart>
        <CountryPicker data={data}></CountryPicker>

      </div>
    );

  async function dataLoading(){
    const data = await fetchData();
    setData(data)
    
  }
}


export default App;
