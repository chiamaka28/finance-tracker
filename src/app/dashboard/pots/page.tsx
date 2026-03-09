'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreatePotDialog } from './components/create-pot-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown';
import { Progress } from '@/components/ui/progress';
import { Ellipsis } from '@/lib/icons';
import useConfirmDialog from '@/hooks/use-confirm-dialog';
import { DeleteDialog } from '@/components/delete-dialog';
import { useDialogStore } from '@/stores/dialog-store';
import { EditPotDialog } from './components/edit-pot-dialog';
import { AddSavingDialog } from './components/add-savings-dialog';
import { WithdrawPotDialog } from './components/withdraw-dialog';

export default function PotsPage() {
  const [open, setOpen] = useConfirmDialog();
  const { OpenCreatePotDialog } = useDialogStore();
  const { OpenEditPotDialog } = useDialogStore();
  const { OpenAddSavingDialog } = useDialogStore();
  const { OpenWithdrawPotDialog } = useDialogStore();
  const colorMap: Record<string, string> = {
    'bg-green-400': '[&>div]:bg-green-400',
    'bg-gray-500': '[&>div]:bg-gray-500',
    'bg-cyan': '[&>div]:bg-cyan',
    'bg-yellow': '[&>div]:bg-yellow',
    'bg-purple': '[&>div]:bg-purple',
  };
  return (
    <div className="bg-beige-100 min-h-screen p-7 md:px-10">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold">Pots</h1>

        <Button
          onClick={OpenCreatePotDialog}
          className="bg-gray-900 text-white"
        >
          + Add New Pot
        </Button>
      </div>
      <div className="mt-6 gap-6 md:grid md:grid-cols-2">
        {data.map((pot) => (
          <Card key={pot.id} className="mb-5 bg-white ring-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900">
                <div className={`h-3 w-3 rounded-full ${pot.color}`}></div>
                {pot.name}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="ml-auto">
                      <Ellipsis className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-26 bg-white ring-0">
                    <DropdownMenuItem
                      onClick={OpenEditPotDialog}
                      className="cursor-pointer text-sm text-gray-900"
                    >
                      Edit Pot
                    </DropdownMenuItem>
                    {/* <DropdownMenuSeparator className="w-[70%] bg-gray-100" /> */}
                    <DropdownMenuItem
                      onSelect={(e) => e.preventDefault()}
                      onClick={() => setOpen(true)}
                      className="text-red cursor-pointer text-sm"
                    >
                      Delete Pot
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                  <DeleteDialog
                    title="Delete ‘Savings’?"
                    desc="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever."
                    cancelButtonText="No, Go Back"
                    confirmButtonText="Yes, Confirm Deletion"
                    open={!!open}
                    onOpenChange={setOpen}
                  />
                </DropdownMenu>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-1.5 flex items-start justify-between">
                <p className="text-gray-300">Total Saved</p>
                <p className="text-3xl font-bold text-gray-900">{pot.amount}</p>
              </div>
              <Progress
                className={`bg-beige-100 ${colorMap[pot.color]} h-2 w-full rounded-xl`}
                value={pot.progress}
              />
              <div className="mt-1.5 flex items-center justify-between text-gray-300">
                <p className="text-[13px] font-bold">{pot.progress}%</p>
                <p className="text-[13px]">Target of ${pot.target}</p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <Button
                  onClick={OpenAddSavingDialog}
                  className="bg-beige-100 h-13 w-full flex-1/2 text-base font-bold text-gray-900"
                >
                  + Add Money
                </Button>
                <Button
                  onClick={OpenWithdrawPotDialog}
                  className="bg-beige-100 h-13 w-full flex-1/2 text-base font-bold text-gray-900"
                >
                  Withdraw
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <CreatePotDialog />
      <EditPotDialog />
      <AddSavingDialog />
      <WithdrawPotDialog />
    </div>
  );
}

const data = [
  {
    id: 1,
    color: 'bg-green-400',
    name: 'Savings',
    amount: '$159.00',
    target: '200.00',
    progress: 75,
  },
  {
    id: 2,
    color: 'bg-gray-500',
    name: 'Concert Tickets',
    amount: '$100.00',
    target: '200.00',
    progress: 50,
  },
  {
    id: 3,
    color: 'bg-cyan',
    name: 'Gift',
    amount: '$40.00',
    target: '60.00',
    progress: 66.6,
  },
  {
    id: 4,
    color: 'bg-yellow',
    name: 'New Laptop',
    amount: '$10.00',
    target: '1000.00',
    progress: 1,
  },
  {
    id: 5,
    color: 'bg-purple',
    name: 'Vacation',
    amount: '$531.00',
    target: '1440.00',
    progress: 36.8,
  },
];

const BUDGET_COLORS = [
  { label: 'Green', value: '#277C78' },
  { label: 'Yellow', value: '#F2CDAC' },
  { label: 'Cyan', value: '#82C9D7' },
  { label: 'Navy', value: '#626070' },
  { label: 'Red', value: '#C94736' },
  { label: 'Purple', value: '#826CB0' },
  { label: 'Turquoise', value: '#597C7C' },
  { label: 'Brown', value: '#93674F' },
  { label: 'Magenta', value: '#934F6F' },
  { label: 'Blue', value: '#3F82B2' },
  { label: 'Navy Grey', value: '#97A0AC' },
  { label: 'Army Green', value: '#7F9161' },
  { label: 'Pink', value: '#AF81BA' },
  { label: 'Gold', value: '#CAB361' },
  { label: 'Orange', value: '#BE6C49' },
] as const;
