import React, {useEffect, useState} from 'react';
import styles from './App.module.css'


import Navigation from './container/Navigation'

import CovidStatus from './pages/CovidStatus/';
import VaccineStatus from './pages/VaccineStatus';
import AboutMe from './pages/AboutMe';


function App() {
    const [menu, setMenu] = useState('covid');

    return (
      <div className={styles.container}>
        <Navigation menu={menu} setMenu = {setMenu}/>
        {menu == 'covid'? 
        <CovidStatus/>
        : menu == 'vaccine' ? 
              <VaccineStatus/> 
              :menu == 'heart' ? <AboutMe/>
              : null
              }
        
        
      </div>
    );

  
}


export default App;
