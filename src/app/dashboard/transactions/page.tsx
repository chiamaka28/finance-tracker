import TransactionTable from './components/Transaction-table';

export default function TransactionsPage() {
  return (
    <div className="bg-beige-100 min-h-screen p-7 md:px-10 md:py-2">
      <h1 className="my-3 text-3xl font-bold">Transactions</h1>
      <TransactionTable />
    </div>
  );
}
