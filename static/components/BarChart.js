import React from 'react';
import {Line, Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
Chart.defaults.font.family = "Josefin Sans"
Chart.defaults.font.size = 16;
Chart.defaults.color = "#000000";



function BarChart(props){

    const state = {
        labels: ["Agreeableness", "Conscientiousness", "Extraversion", "Emotional Range", "Openness"],
        datasets: [
        {
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ],
            data: props.data[0],
            borderRadius: 20,
            axis: 'y',
            fill: false,
        }
        ]
    }
        
    return (
        <div>
        <Bar
            data={state}
            options={{
            responsive: true,
            indexAxis:"y",
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'strength per category.',
                    font: {
                        size: 22
                    }
                },
            },
            scales: {
                x: {
                    display: true,
                    min: 0,
                    max: 100,
                    grid: {
                        display: false
                     },
                    font: {
                        family: 'Josephin Sans', // Your font family
                        size: 10,
                    },
                },

                y: {
                    ticks: {
                        mirror: true,
                        // labelOffset: 30,
                    },
                }
            },
            }}
        />
        </div>
    );
}

export default BarChart
