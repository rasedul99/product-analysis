import React from "react";
import Barchart from "./Barchart";
import "./Dashboard.css";
import Linechart from "./Linechart";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];
const Dashboard = () => {
  return (
    <div className="chartcontainer">
      <Linechart data={data} />
      <Barchart data={data} />
    </div>
  );
};

export default Dashboard;