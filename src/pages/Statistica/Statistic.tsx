import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistic = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=5")
      .then((res) => {
        const labels = res.data.products.map((p: any) => p.title);
        const stocks = res.data.products.map((p: any) => p.stock);

        setData({
          labels,
          datasets: [
            {
              label: "Stock",
              data: stocks,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#E7E9ED",
              ],
              borderWidth: 1,
            },
          ],
        });
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-black mb-4 uppercase tracking-widest text-center">
          Statistics
        </h2>
        <p className="text-gray-600 text-lg mb-8 text-center">Products stock pie chart</p>
        {loading ? (
          <div className="text-gray-500 text-center">Loading chart...</div>
        ) : (
          <div className="w-full max-w-md mx-auto">
            <Pie data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Statistic);
