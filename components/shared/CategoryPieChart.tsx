'use client'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const data = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Groceries', value: 200 },
    { name: 'Furniture', value: 100 },
]

const COLORS = ['#4f46e5', '#22c55e', '#f97316', '#ec4899']

export default function CategoryPieChart() {
    return (
        <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={ data }
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={ 120 }
                        label
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
