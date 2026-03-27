import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyClimbsChart: React.FC = () => {
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const climbs = [1, 4, 2, 1];

  const data = {
    labels,
    datasets: [
      {
        label: "Climbs",
        data: climbs,
        borderColor: "rgb(17, 43, 127)",
        backgroundColor: "rgba(98, 125, 188, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, stepSize: 1, max: Math.max(...climbs) + 1},
    },
  };

  return <Bar data={data} options={options} />;
};

export default MonthlyClimbsChart;