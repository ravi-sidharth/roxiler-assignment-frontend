import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart() {
    const [month, setMonth] = useState(3);
    const [barChartData, setBarChartData] = useState({});

    const handleMonthStatus = (e) => {
        setMonth(e.target.value);
    };

    const fetchBarChartData = async () => {
            const result = await axios.get(`https://roxiler-backend-assignment-p406.onrender.com/api/bar-chart?month=${month}`)
            setBarChartData(result.data.barChartData[0]);
    };

    useEffect(() => {
        fetchBarChartData();
    }, [month]);

    return (
        <div className='w-[80%] mx-auto bg-indigo-300 rounded-md'>
            <div className="flex justify-center mt-5 gap-5 text-4xl ">
                <label htmlFor="">Bar Chart Stats</label>
                <select
                    className=""
                    onChange={handleMonthStatus}
                    defaultValue="3"
                >
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
            </div>

            <div className="w-[80%] h-[500px] mx-auto">
                <Bar data={{
                    labels:Object.keys(barChartData),
                    datasets: [
                        {
                            label: 'Bar Chart Stats',
                            data: Object.values(barChartData),
                            backgroundColor: ['blue', 'yellow', 'green', 'red', 'purple', 'orange', 'aqua', 'magenta', 'zinc', 'teal'],
                        },
                    ],
                }} 
                options={{

                }}
                
                />
            </div>
        </div>
    );
}

export default BarChart;
