import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ReviewChart = ({ ratings }) => {
  if (!Array.isArray(ratings) || ratings.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-base-100 rounded-lg shadow">
        <p className="text-gray-500 text-sm">No valid rating data available</p>
      </div>
    );
  }

  // Convert count to number
  const validatedRatings = ratings.map((r) => ({
    name: r.name || "Unknown",
    count: Number(r.count) || 0,
  }));

  return (
    <div className="w-full bg-base-100 shadow-md rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-center text-gray-700">
        ⭐ User Rating Distribution
      </h2>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={validatedRatings}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fill: "#4b5563", fontSize: 14 }} />
            <YAxis
              tick={{ fill: "#4b5563", fontSize: 14 }}
              allowDecimals={false}
            />
            <Bar
              dataKey="count"
              fill="#6366F1"
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReviewChart;
