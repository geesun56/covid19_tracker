import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';

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
                <NativeSelect  defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value=""> Global</option>
                    {countries.map((country) => (<option value={country}>{country}</option>))};
                </NativeSelect>
            </FormControl>
        </div>
    )
}


export default CountryPicker;
