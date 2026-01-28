import BillsCard from '@/components/bills-card';
import BudgetCard from '@/components/budget-card';
import CardGrid from '@/components/card-grid';
import Pots from '@/components/pots-cards';
import TransactionCard from '@/components/transaction-card';

export default function DashboardPage() {
  return (
    <div className="bg-beige-100 min-h-screen p-6">
      <h1 className="text-2xl">Overview</h1>
      <CardGrid />
      <Pots />
      <TransactionCard />
      <BudgetCard />
      <BillsCard />
    </div>
  );
}
