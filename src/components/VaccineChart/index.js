import { makeStyles } from '@material-ui/core';
import React, {useState, useEffect } from 'react';
import {Line, Bar} from 'react-chartjs-2'


const useStyles = makeStyles(() => ({
  
    container: {
        display: 'flex',
        justifySelf: 'center',
        marginBottom: '80px',
        width: '85%',
        
        '@media(max-width: 770px)' : {
                width: '100%',
                
            
        }
    },

    lineChart: {
        width: '100%',
        '@media(max-width: 770px)' : {
            
        
    }
    }

    
    
    
    
    
}));
    
const topTen = ['Israel', 'United States', 'China', 'United Kingdom', 'France', 'Germany', 'Russia', 'South Korea', 'Japan', 'United Arab Emirates', 'World'];   
const borders = ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65', '#F2D4CC', '#E77577', '#6C88C4', '#C05780', '#FC6238']
export default function VaccineChart(props){
    
    const {data, country} = props;
    const [topData, setTopData] = useState();
    const classes = useStyles();
    const [dataset, setDataset] = useState();
    const [singleData, setSingleData] = useState();


    useEffect(()=> {
        loadData(country);
        
    }
    , [props])
    

    const topTenChart = (
        topData && dataset?
        (<div className={classes.lineChart}>
            <Line
        data ={{
            labels: topData['World']['data'].map((d) => d.date),
            datasets:[...dataset] 
        }} 

        options= {{
            title: {
                display: true,
                text: 'Full Vaccination Rate by country'
            }
                }}
        />
            </div>): 
        null
    )

    const singleChart  =(
        singleData ? 
        (<div className={classes.lineChart}>
            <Line
        data ={{
            labels: singleData['data'].map((d) => d.date),
            datasets: [{ data: singleData['data'].map((d) => d.total_vaccinations),
                        label: "Total vaccinations",
                        borderColor: borders[0],
                        fill: false
                        }, { data: singleData['data'].map((d) => d.total_vaccinations_per_hundred),
                        label: "Total vaccination rate",
                        borderColor: borders[1],
                        fill: false
                        },{ data: singleData['data'].map((d) => d.daily_vaccinations),
                        label: "Daily vaccinations",
                        borderColor: borders[2],
                        fill: false
                        }]
        }} 

        options= {{
            title: {
                display: true,
                text: `Vaccination Status in ${country}`
            }
                }}
        />
            </div>)
        : <p>Do not have the data</p>
    );

    return (
        <div className={classes.container}>
            {country? singleChart: topTenChart}
            
        </div>
    )

    function loadData(country){
        if(data != null){
            if(country== null){
                let newData = [];

                topTen.forEach((ele) => {
                    const newRow = data.find(r => r.country == ele)
                    newData[newRow.country]=newRow
                })
                const processed =  processData(newData, 'Global')
                setTopData(processed);
                dataset_init(processed)
            }else{
                const targetRow = data.find(r => r.country == country)
                setSingleData(targetRow);
                console.log('single: ', country, targetRow)
            }
            
            
        }

    }

    function processData(topData, type){
        let data = topData;

        if(type == 'Global'){
            data['World']['data'].forEach((d) => {
                topTen.forEach((c) => {
                    
                    if(data[c].data.find((ele) => ele.date == d.date) == null){
                        data[c].data.push({date: d.date, total_vaccinations_per_hundred: null})
                    }
                })
            })
    
            topTen.forEach((c) => {
                data[c].data.sort((a,b) => (new Date(a.date).getTime() - new Date(b.date).getTime()));
            })
        }else{

        }
        

        return data
    }

    function dataset_init (topData) {
        const dataset = topTen.map((e, index)=> {
                let target;
                target = topData[e].data
                return ({
                    data: target.map((d) => d.total_vaccinations_per_hundred),
                    label: e,
                    borderColor: borders[index],
                    fill: false
                })
            
        })
        console.log('dataset', dataset);
        setDataset(dataset)
        
    }

    
}


