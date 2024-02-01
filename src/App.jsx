import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CategoryList from "./components/CategoryList";
import MoneySpentCard from "./components/MoneySpentCard";
import MainChart from "./components/MainChart";
import Table from "./components/Table";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex  justify-evenly">
      <div className="flex flex-col justify-start gap-4">
        <MoneySpentCard />
        <CategoryList />
      </div>
      <div className="flex flex-col justify-between gap-4 items-center">
        <MainChart />
        <Table />
        
      </div>
    </div>
  );
}

export default App;
