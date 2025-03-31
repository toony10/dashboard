import { Card } from '@/components/ui/card'
import SalesChart from '@/components/shared/SalesChart'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
      <Card className="p-4">
        <h2 className="text-lg font-bold">Total Products</h2>
        <p className="text-3xl mt-2">120</p>
      </Card>
      <Card className="p-4">
        <h2 className="text-lg font-bold">Total Sales</h2>
        <p className="text-3xl mt-2">$34,000</p>
      </Card>
      <div className="col-span-full">
        <h2 className="text-lg font-bold mb-2">Monthly Sales</h2>
        <SalesChart />
      </div>
    </div>
  );
}
