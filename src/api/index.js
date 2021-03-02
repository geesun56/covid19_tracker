import axios from 'axios'; //request api calls

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let accessUrl = url;

    if(country){
        accessUrl = `${url}/countries/${country}`
    }

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(accessUrl);

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
        const {data} = await axios.get(`${url}/daily`)

        return data
    }catch(error){
        console.error(error);
    }
}

export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((con) => con.name)

    }catch(error){
        console.error(error);

    }
}

