import React, { useEffect, useState } from "react";
import axios from 'axios'

const Dashboard = () => {
    const [transactionsData, setTransactionData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [month,setMonth] = useState(3)
    const [search,setSearch] = useState("")

    const perPage = 10
    const noOfPage = Math.ceil(transactionsData.length/10)
    const start = (currentPage-1) *perPage
    const end = currentPage * perPage

    const goToNextPage=()=> {
      setCurrentPage(prev=>prev+1)
    }

    const goToPreviousPage = ()=> {
      setCurrentPage(prev=>prev-1)
    }

    const fetchAllTransactions = async() => {
      const result =await  axios.get(`https://roxiler-backend-assignment-p406.onrender.com/api/transactions?month=${month}&search=${search}&page=${currentPage}`)
      setTransactionData(result.data.transactions)
      setCurrentPage(result.data.page)
    }

    const handleMonthStatus = (e) => {
      setMonth(e.target.value)
    }

    const handleSearchData = (e) => {
      setSearch(e.target.value)
    }

    useEffect(()=> {
        fetchAllTransactions()
    },[month,search,currentPage])

  return (
    <div className="w-[80%] mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="flex justify-center text-4xl font-bold">
        <div className="mt-5 p-4 border-2 w-[430px] rounded-lg shadow-2xl shadow-cyan-400  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          Transaction Dashboard
        </div>
      </div>
      <div className="flex justify-between">
        <div ><input onChange={(e)=>handleSearchData(e)} className="bg-gray-400 border rounded-lg px-2 cursor-pointer" type="text" placeholder="Search transaction"/></div>
        <div>
            <select className="border rounded-lg bg-gray-400 cursor-pointer" defaultValue="3" onChange={(e)=>handleMonthStatus(e)} >
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">March</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">Aug</option>
                <option value="9">Sept</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </select>
        </div>
      </div>

      <div className="text-sm" >
        <table className="mt-5">
          <thead>
            <tr className="">
              <th className="border">id</th>
              <th className="border">title</th>
              <th className="border">price</th>
              <th className="border">description</th>
              <th className="border">category</th>
              <th className="border">image</th>
              <th className="border">sold</th>
            </tr>
          </thead>
          <tbody className="">
          {transactionsData && transactionsData.length>0 &&
            transactionsData.slice(start,end).map((each) => {
              return (
                <tr className="" key={each.id}>
                  <td className="text-center border ">{each.id}</td>
                  <td className="border">{each.title}</td>
                  <td className="text-center border">{each.price} Rs</td>
                  <td className="border">{each.description}</td>
                  <td className="text-center border">{each.category}</td>
                  <td className="text-center border">
                    <img
                      className="object-cover text-center"
                      src={each.image}
                      height={50}
                      width={50}
                      alt={each.title}
                    />
                  </td>
                  <td className="border text-2xl text-center">
                    {each.sold ? "✅" : undefined}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <div>Page No:{currentPage}</div>
        <div>
            <button disabled={currentPage===noOfPage || noOfPage==0} className={`cursor-pointer ${currentPage===noOfPage|| noOfPage==0?'opacity-50':''}`} onClick={()=>goToNextPage()}  >Next</button>-
            <button disabled={currentPage===1}  className={`cursor-pointer ${currentPage===1?'opacity-50':''}`}   onClick={()=>goToPreviousPage()}>Previous</button>
        </div>
        <div>Per Page:{perPage}</div>
      </div>

    </div>
  );
};

export default Dashboard;
