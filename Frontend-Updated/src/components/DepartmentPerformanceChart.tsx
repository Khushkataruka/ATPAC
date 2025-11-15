'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface IDepartmentStat {
    _id: string;
    departmentName: string;
    degree: string;
    batchYear: number;
    totalStudents: number;
    eligibleStudents: number;
    placementsPlaced: number;
    internshipsPlaced: number;
    unplaced: number;
}

interface ChartProps {
    data: IDepartmentStat[];
}

export default function DepartmentPerformanceChart({ data }: ChartProps) {
    const chartData = data.map(stat => {
        const totalOffers = stat.placementsPlaced + stat.internshipsPlaced;
        const rate = stat.eligibleStudents > 0 ? (totalOffers / stat.eligibleStudents) * 100 : 0;
        return {
            name: stat.departmentName.trim().replace(/ & /g, '&'),
            placementRate: parseFloat(rate.toFixed(2)),
        }
    }).sort((a, b) => b.placementRate - a.placementRate);

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} unit="%" />
                    <Tooltip
                        contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                        labelStyle={{ fontWeight: 'bold' }}
                        formatter={(value: number) => [`${value}%`, 'Placement Rate']}
                    />
                    <Legend wrapperStyle={{ fontSize: '14px' }} />
                    <Bar dataKey="placementRate" name="Overall Placement Rate" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}