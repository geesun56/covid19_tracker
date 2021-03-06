import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, TextField} from '@material-ui/core'
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';
import Autocomplete from '@material-ui/lab/Autocomplete';


const CountryPicker = (props)  => {
    const [countries, setCountries] = useState([]);
    const {handleCountryChange} = props;

    useEffect(() => {
        const getCountries = async () => {
            const rows = await fetchCountries()
            .then((rows) => {
                console.log(rows)
                setCountries(rows)
                });
        }

        getCountries();

    }, [setCountries])
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
