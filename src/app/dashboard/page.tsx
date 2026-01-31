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
      <div className="my-8 flex-1 gap-x-6 overflow-auto md:grid md:min-h-0 md:grid-cols-5">
        <Pots />
        <BudgetCard />
        <TransactionCard />
        <BillsCard />
      </div>
    </div>
  );
}
