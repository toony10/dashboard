'use client'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts'

const data = [
    { month: 'Jan', sales: 400 },
    { month: 'Feb', sales: 300 },
    { month: 'Mar', sales: 500 },
    { month: 'Apr', sales: 200 },
    { month: 'May', sales: 600 },
    { month: 'Jun', sales: 700 },
    { month: 'Jul', sales: 650 },
    { month: 'Aug', sales: 500 },
    { month: 'Sep', sales: 750 },
    { month: 'Oct', sales: 820 },
    { month: 'Nov', sales: 900 },
    { month: 'Dec', sales: 1000 },
]

export default function SalesChart() {
    return (
        <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ data }>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#4f46e5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
