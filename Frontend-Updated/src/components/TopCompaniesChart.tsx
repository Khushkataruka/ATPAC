'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: { name: string, count: number }[];
}

export default function TopCompaniesChart({ data }: ChartProps) {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
          <XAxis type="number" stroke="currentColor" fontSize={12} />
          <YAxis dataKey="name" type="category" width={150} stroke="currentColor" fontSize={12} />
          <Tooltip
            contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
            labelStyle={{ fontWeight: 'bold' }}
          />
          <Legend wrapperStyle={{ fontSize: '14px' }} />
          <Bar dataKey="count" name="Students Hired" fill="#10b981" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}