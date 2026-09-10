"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Essentials",
    value: 2500,
    color: "#2563EB",
  },
  {
    name: "Savings",
    value: 1000,
    color: "#22C55E",
  },
  {
    name: "Lifestyle",
    value: 1500,
    color: "#F97316",
  },
];

const totalIncome = 7000;
const usedAmount = 5000;

export default function ExpenseDonutChart() {
  return (
    <div className="">
      <div className="mb-6">
        <h2 className="text-headline-md text-on-surface font-bold">
          Monthly Budget
        </h2>

   
      </div>

      <div className="relative h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={100}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-on-surface">
            ₹7,000
          </span>
        </div>
      </div>

     
    </div>
  );
}