import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, TextField} from '@material-ui/core'
import styles from './CountryPicker.module.css';

import Autocomplete from '@material-ui/lab/Autocomplete';


const CountryPicker = (props)  => {
    const {handleCountryChange, countries} = props;
    
    useEffect(() => {
        
       

    }, [])
    return (
        <div>
            <FormControl className={styles.formControl}>
                <Autocomplete
                id="combo-box-demo"
                options={countries}
                getOptionLabel={(option) => option + ''}
                className={styles.searchBar}
                renderInput={(params) => <TextField {...params} label="Select a country" variant="outlined" />}
                onChange={(event, newValue) => {
                    handleCountryChange(newValue);
                  }}
                />
            </FormControl>
        </div>
    )
}


export default CountryPicker;
