import React, {useEffect, useState} from 'react';
import styles from './App.module.css'


import Navigation from './container/Navigation'
import CovidStatus from './pages/CovidStatus/';

function App() {

    return (
      <div className={styles.container}>
        <Navigation/>
        <CovidStatus/>

      </div>
    );

  
}


export default App;
