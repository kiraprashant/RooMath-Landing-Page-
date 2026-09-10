"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Cell,
} from "recharts";

const ExpenseBar = ({
  title,
  subtitle,
  percent,
  amount,
  spend,
  color = "#2563eb",
}) => {
  const data = [
    {
      value: percent,
    },
  ];

  return (
    <div className="space-y-4 w-full">
      {/* Top Content */}
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-label-md text-on-surface font-semibold">
            {title}
          </h3>

          <p className="text-xs text-on-surface-variant">
          {subtitle}
          </p>
        </div>

        <div className="text-right">
          <span
            className="text-headline-md font-bold"
            style={{ color }}
          >
            {percent}%
          </span>

          <p className="text-label-sm text-on-surface-variant">
          {spend} / {amount}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-3 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              type="number"
              hide
              domain={[0, 100]}
            />

            <Bar
              dataKey="value"
              radius={[999, 999, 999, 999]}
              barSize={5}
              background={{
                fill: "#2d3449",
                radius: 999,
              }}
              animationDuration={1200}
            >
              <Cell fill={color} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseBar;