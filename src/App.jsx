import "./App.css";
import BarChart from "./Components/BarChart/BarChart";
import Dashboard from "./Components/Dashboard/Dashboard";
import PieChart from "./Components/StatsChart/PieChart";
import TransactionStatistics from "./Components/TransactionStatistics/TransactionStatistics";

function App() {
  return (
    <div className="min-h-full flex flex-col gap-20  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Dashboard />
      <TransactionStatistics />
      <PieChart />
      <BarChart />
    </div>
  );
}

export default App;
