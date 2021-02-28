import React, {useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'
const Chart = (props)  => {
    const [dailyData, setDailyData] = useState({});

    useEffect(()=> {
        LoadData();
    }
    , [])
    

    const lineChart = (
        dailyData[0] ?
        (<Line
        data ={{
            labels: dailyData.map((d) => d.reportDate),
            datasets:[{
                data: dailyData.map((d) => d.confirmed.total),
                label: 'Confirmed',
                borderColor: '#3333ff',
                fill: true
            },{
                data: dailyData.map((d) => d.deaths.total),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            }]
        }}
        />): null
    )
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )

    async function LoadData(){
        const data = await fetchDailyData();
        console.log(data)
        setDailyData(data);

    }
}


export default Chart;
