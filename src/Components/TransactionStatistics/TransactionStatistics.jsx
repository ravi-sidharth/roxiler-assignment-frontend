import axios from "axios";
import React, { useEffect, useState } from "react";

const TransactionStatistics = () => {
    const [month,setMonth] =useState(3)
    const [statisticsData, setStatisticsData] =useState("")
    const fetchStatisticsData= async() => {
        const result =await axios.get(`https://roxiler-backend-assignment-p406.onrender.com/api/statistics?month=${month}`)
        setStatisticsData(result.data.statistics[0])
    }

    const handleMonthStatus = (e) => {
        setMonth(e.target.value)
    }

  useEffect(() => {
    fetchStatisticsData()
  }, [month]);

  return (
    <div className="flex flex-col justify-center items-center" >
     <div className="border p-5 rounded-lg shadow-2xl shadow-gray-600 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
     <div className="flex gap-5 text-4xl ">
        <label>Statistics</label>
        <select className="" onChange={(e)=>handleMonthStatus(e)}  defaultValue="3" >
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
      <div className="p-2 rounded-lg shadow-2xl shadow-gray-600 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="flex gap-5">
          <div>Total sale</div>
          <div>{(statisticsData.totalSaleAmount)}</div>
        </div>
        <div className="flex gap-5">
          <div>Total sold item</div>
          <div>{statisticsData.totalSoldItems}</div>
        </div>
        <div className="flex gap-5">
          <div>Total not sold item</div>
          <div>{statisticsData.totalNotSoldItems}</div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default TransactionStatistics;
