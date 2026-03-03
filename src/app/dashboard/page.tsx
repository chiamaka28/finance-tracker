import BillsCard from '@/components/bills-card';
import BudgetCard from '@/components/budget-card';
import CardGrid from '@/components/card-grid';
import Pots from '@/components/pots-cards';
import TransactionCard from '@/components/transaction-card';

export default function DashboardPage() {
  return (
    <div className="bg-beige-100 flex min-h-screen flex-col p-7 md:px-10 md:py-2">
      <h1 className="my-3 text-3xl font-bold">Overview</h1>
      <CardGrid />
      <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="order-1 md:order-1 md:col-span-3">
          <Pots />
        </div>
        <div className="order-2 md:order-2 md:col-span-2 md:row-span-2">
          <BudgetCard />
          <div className="mt-6">
            <BillsCard />
          </div>
        </div>
        <div className="order-3 md:order-3 md:col-span-3">
          <TransactionCard />
        </div>
      </div>
    </div>
  );
}
