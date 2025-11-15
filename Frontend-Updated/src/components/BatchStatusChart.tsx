'use client';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, PieLabelRenderProps } from 'recharts';

// --- Type Definitions ---
interface IDepartmentStat {
  departmentName: string;
  placementsPlaced: number;
  internshipsPlaced: number;
  unplaced: number;
}

// Props now include the selected department
interface ChartProps {
  data: IDepartmentStat[];
  selectedDepartment: string;
}

const COLORS = ['#10B981', '#3B82F6', '#EF4444']; // Placed, Intern, Unplaced

export default function BatchStatusChart({ data, selectedDepartment }: ChartProps) {
  let totalPlaced = 0;
  let totalIntern = 0;
  let totalUnplaced = 0;

  // If a specific department is selected, find its data
  if (selectedDepartment && selectedDepartment !== 'All Departments') {
    const departmentData = data.find(d => d.departmentName === selectedDepartment);
    if (departmentData) {
      totalPlaced = departmentData.placementsPlaced;
      totalIntern = departmentData.internshipsPlaced;
      totalUnplaced = departmentData.unplaced;
    }
  } else {
    // Otherwise, calculate the total for all departments
    totalPlaced = data.reduce((sum, item) => sum + item.placementsPlaced, 0);
    totalIntern = data.reduce((sum, item) => sum + item.internshipsPlaced, 0);
    totalUnplaced = data.reduce((sum, item) => sum + item.unplaced, 0);
  }

  const chartData = [
    { name: 'Full-time Placed', value: totalPlaced },
    { name: 'Internship/PPO', value: totalIntern },
    { name: 'Unplaced', value: totalUnplaced },
  ].filter(item => item.value > 0);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            labelLine={false}
            label={(props: PieLabelRenderProps) => `${((props as any).percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: '14px' }}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}