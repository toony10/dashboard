import SalesChart from '@/components/shared/SalesChart'
import CategoryPieChart from '@/components/shared/CategoryPieChart'

const sealsByCategoryData = [
    { name: 'Clothing', value: 45 },
    { name: 'Electronics', value: 30 },
    { name: 'Furniture', value: 15 },
    { name: 'Groceries', value: 10 },
]

const salesByCountryData = [
    { name: 'United States', value: 25 },
    { name: 'Saudi Arabia', value: 20 },
    { name: 'France', value: 18 },
    { name: 'Germany', value: 15 },
    { name: 'United Kingdom', value: 12 },
    { name: 'Egypt', value: 7 },
    { name: 'UAE', value: 3 },
];


export default function Page() {
    return (
        <div className="grid grid-cols-1 gap-6">
            <div className='flex flex-col gap-20 md:flex-row'>
                <CategoryPieChart title='Seals by category' data={ sealsByCategoryData } />
                <CategoryPieChart title='Top Countries by Sales' data={ salesByCountryData } />
            </div>
            <div className='mt-10'>
                <h2 className="text-xl font-bold mb-4 text-center">Monthly Sales</h2>
                <SalesChart />
            </div>
        </div>
    )
}