"use client";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.css";

const chartProps: React.ComponentPropsWithoutRef<typeof Line> = {
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: "Patients Treated In 2023" },
      legend: { display: false },
    },
    scales: { y: { beginAtZero: true } },
  },
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Number of patients",
        data: [1003, 590, 900, 238, 922, 1000, 432, 873, 459, 789, 309, 1500],
        borderColor: "rgb(134, 1, 175)",
      },
    ],
  },
};

Chart.register(CategoryScale);

export const LineChart = () => (
  <div className={styles.chart}>
    <h3>Chart</h3>
    <Line {...chartProps} />
  </div>
);

export default LineChart;
