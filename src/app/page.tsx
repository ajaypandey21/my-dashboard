// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import DataTable from "../components/DataTable";

const Dashboard = () => {
  const [data, setData] = useState({
    lineChartData: { labels: [], values: [] },
    barChartData: { labels: [], values: [] },
    tableData: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data");
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-grid">
      <LineChart data={data.lineChartData} />
      <BarChart data={data.barChartData} />
      <DataTable data={data.tableData} />
    </div>
  );
};

export default Dashboard;
