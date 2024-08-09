"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LineChart = dynamic(() => import("../components/LineChart"), {
  ssr: false,
});
const BarChart = dynamic(() => import("../components/BarChart"), {
  ssr: false,
});
const DataTable = dynamic(() => import("../components/DataTable"), {
  ssr: false,
});

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
