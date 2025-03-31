'use client'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'


const COLORS = ['#4f46e5', '#22c55e', '#f97316', '#ec4899']

export default function CategoryPieChart({ title, data }: ChartProps) {
    return (
        <div className="w-full h-[400px]">
            <h2 className="text-xl font-bold mb-4 text-center">{ title }</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={ data }
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={ 120 }
                        label={ ({ value }) => `${value}%` }
                    >
                        { data.map((entry, index) => (
                            <Cell key={ `cell-${index}` } fill={ COLORS[index % COLORS.length] } />
                        )) }
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
