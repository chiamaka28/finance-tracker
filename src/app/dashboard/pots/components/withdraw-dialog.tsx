'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useDialogStore } from '@/stores/dialog-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Progress } from '@/components/ui/progress';

export function WithdrawPotDialog() {
  const { withdrawPotOpen, CloseWithdrawPotDialog } = useDialogStore();
  return (
    <Dialog open={withdrawPotOpen} onOpenChange={CloseWithdrawPotDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 sm:text-3xl">
            Withdraw from ‘Savings’
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-300">
            Withdraw from your pot to put money back in your main balance. This
            will reduce the amount you have in this pot.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="mb-4">
            <div className="mb-1.5 flex items-start justify-between">
              <p className="text-gray-300">New Amount</p>
              <p className="text-3xl font-bold text-gray-900">$139.00</p>
            </div>
            <Progress
              className={`bg-beige-100 h-2 w-full rounded-xl`}
              value={33}
            />
            <div className="mt-1.5 flex items-center justify-between text-gray-300">
              <p className="text-[13px] font-bold">5.95%</p>
              <p className="text-[13px]">Target of $2,000</p>
            </div>
          </div>
          <FieldGroup>
            <Field className="gap-1.5">
              <FieldLabel className="text-xs text-gray-300">
                Amount to Withdraw
              </FieldLabel>
              <Input className="border-gray-300" />
            </Field>
            <Button
              type="submit"
              className="mt-4 h-12 w-full bg-gray-900 text-white"
            >
              Confirm Withdrawal
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
const colorMap: Record<string, string> = {
  'bg-green-400': '[&>div]:bg-green-400',
  'bg-gray-500': '[&>div]:bg-gray-500',
  'bg-cyan': '[&>div]:bg-cyan',
  'bg-yellow': '[&>div]:bg-yellow',
  'bg-purple': '[&>div]:bg-purple',
};
