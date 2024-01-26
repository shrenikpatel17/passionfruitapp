import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
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
Chart.defaults.font.size = 16
Chart.defaults.color = "#000000";


function PieChart(props){

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
        data: props.data[0]
        }
    ]
    }
        return (
        <div>
            <Pie
            data={state}
            options={{
                elements: {
                    arc: {
                        borderWidth: 0,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'breakdown of self.',
                        font: {
                            size: 32
                        },
                    },
                },
            }}
            />
        </div>
        );
  }

export default PieChart