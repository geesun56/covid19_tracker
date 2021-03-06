import axios from 'axios'; //request api calls
import bent from 'bent';

const case_url = 'https://covid19.mathdro.id/api';
const country_url = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/locations.csv';
const vaccine_url = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json';

export const fetchData = async (country) => {

    let access_url = case_url;

    if(country){
        access_url = `${case_url}/countries/${country}`
    }

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(access_url);

        // const modifiedData = {
        //     confirmed,
        //     recovered,
        //     deaths,
        //     lastUpdate,
        // }
        
        return {confirmed, recovered, deaths, lastUpdate };

    }catch(error){
        
    }
}

export const fetchDailyData = async () => {

    try{
        const {data} = await axios.get(`${case_url}/daily`)

        return data
    }catch(error){
        console.error(error);
    }
}

export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${case_url}/countries`);
        
        return countries.map((con) => con.name)

    }catch(error){
        console.error(error);

    }
}

export const fetchVaccineStatus = async (keyword) => {
    
    if(keyword == 'country'){
        const bent = require('bent');
        const getString = bent('string');
        const csv = require('csvtojson')
        
        
        const data = await csv().fromString(await getString(country_url)).then((obj) => {return obj})
        
        return data
    }else if(keyword == 'vaccination'){
        const {data} = await axios.get(vaccine_url);
        
        return data
    }else{
        console.log('Invalid Access!')
    }

}
