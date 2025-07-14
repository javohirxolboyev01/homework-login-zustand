import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Bar,
  Line,
  Pie,
  Doughnut,
  PolarArea,
  Radar,
  Scatter,
  Bubble,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title
);

const chartColors = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#E7E9ED",
  "#B2FF66",
  "#FF66B2",
  "#66B2FF",
];

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=7").then((res) => {
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-black mb-4 uppercase tracking-widest text-center">
            Home Page
          </h2>
          <p className="text-gray-600 text-lg text-center">Loading charts...</p>
        </div>
      </div>
    );
  }

  const labels = products.map((p) => p.title);
  const stocks = products.map((p) => p.stock);

  const barData = {
    labels,
    datasets: [
      {
        label: "Stock",
        data: stocks,
        backgroundColor: chartColors,
      },
    ],
  };

  const horizontalBarData = {
    ...barData,
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: "Stock",
        data: stocks,
        fill: false,
        borderColor: "#36A2EB",
        backgroundColor: "#36A2EB",
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels,
    datasets: [
      {
        label: "Stock",
        data: stocks,
        backgroundColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = pieData;
  const polarData = pieData;
  const radarData = {
    labels,
    datasets: [
      {
        label: "Stock",
        data: stocks,
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "#36A2EB",
        pointBackgroundColor: "#36A2EB",
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: "Stock",
        data: products.map((p, i) => ({ x: i + 1, y: p.stock })),
        backgroundColor: "#FF6384",
      },
    ],
  };

  const bubbleData = {
    datasets: [
      {
        label: "Stock",
        data: products.map((p, i) => ({
          x: i + 1,
          y: p.stock,
          r: Math.max(5, Math.min(20, p.stock / 10)),
        })),
        backgroundColor: "#FFCE56",
      },
    ],
  };

  const horizontalBarOptions = {
    indexAxis: "y" as const,
  };

  const chartRenderers = [
    { name: "Vertical Bar", chart: <Bar data={barData} /> },
    {
      name: "Horizontal Bar",
      chart: <Bar data={horizontalBarData} options={horizontalBarOptions} />,
    },
    { name: "Line", chart: <Line data={lineData} /> },
    { name: "Pie", chart: <Pie data={pieData} /> },
    { name: "Doughnut", chart: <Doughnut data={doughnutData} /> },
    { name: "Polar Area", chart: <PolarArea data={polarData} /> },
    { name: "Radar", chart: <Radar data={radarData} /> },
    { name: "Scatter", chart: <Scatter data={scatterData} /> },
    { name: "Bubble", chart: <Bubble data={bubbleData} /> },
  ];

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-black mb-8 uppercase tracking-widest text-center">
          Home Page
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {chartRenderers.map((item,) => (
            <div
              key={item.name}
              className="bg-gray-50 rounded-xl shadow p-4 flex flex-col items-center"
            >
              <h3 className="text-lg font-bold mb-2 text-gray-700 text-center">
                {item.name}
              </h3>
              <div className="w-full h-64 flex items-center justify-center">
                {item.chart}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
