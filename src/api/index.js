import axios from 'axios'; //request api calls

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

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