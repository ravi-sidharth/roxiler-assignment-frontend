import React, { useEffect, useState } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);
import axios from "axios";

const PieChart = () => {
  const [month, setMonth] = useState(3);
  const [pieChartData, setPieChartData] = useState([]);

  const handleMonthStatus = (e) => {
    setMonth(e.target.value);
  };

  const fetchUniqueCategoryData = async () => {
    const result = await axios.get(`api/pie-chart?month=${month}`);
    setPieChartData(result.data.pieChartData);
  };

  useEffect(() => {
    fetchUniqueCategoryData();
  }, [month]);

  return (
    <div className="w-[80%] mx-auto">
     <div className="p-5 rounded-lg shadow-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
     <div className="flex gap-5 justify-center text-4xl">
        <label htmlFor="">Unique Category Chart</label>
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

      <div className="h-[300px] w-[30%] mx-auto mt-5">
        <Doughnut
          data={{
            labels: pieChartData.map((data) => data.category),
            datasets: [
              {
                label: "Unique Category",
                data: pieChartData.map((data) => data.items),
                backgroundColor: ['blue', 'yellow', 'green', 'red', 'purple', 'orange', 'aqua', 'magenta', 'zinc', 'teal'],
              },
            ],
          }}
        />
      </div>
     </div>
    </div>
  );
};

export default PieChart;
