import React, {useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'
const Chart = (props)  => {
    const [dailyData, setDailyData] = useState({});
    const {country} = props;
    const {confirmed, deaths, recovered} = props.data;


    useEffect(()=> {
        LoadData();
        console.log(country)
        console.log(confirmed)
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
        options= {{
            title: {
                display: true,
                text: 'Global COVID-19 Status'
            }
                }}
        />): null
    )

    const barChart  =(
        confirmed ? 
        (<Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'people',
                    backgroundColor: [
                        'rgba(0,0,255, 0.5)',
                        'rgba(0,255,0, 0.5)',
                        'rgba(255,0,0, 0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value]
                }],
            }}

            options={{
                legend:{display:false},
                title: {display: true, text:`Current state in ${country}`}
            }}
        />)
        : null
    );

    return (
        <div className={styles.container}>
            {country? barChart: lineChart}
            
        </div>
    )

    async function LoadData(){
        const data = await fetchDailyData();
        console.log(data)
        setDailyData(data);

    }
}


export default Chart;
