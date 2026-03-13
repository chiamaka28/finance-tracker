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

export function AddSavingDialog() {
  const { addSavingOpen, CloseAddSavingDialog } = useDialogStore();
  return (
    <Dialog open={addSavingOpen} onOpenChange={CloseAddSavingDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 sm:text-3xl">
            Add to ‘Savings’
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-300">
            Add money to your pot to keep it separate from your main balance. As
            soon as you add this money, it will be deducted from your current
            balance.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="mb-4">
            <div className="mb-1.5 flex items-start justify-between">
              <p className="text-gray-300">New Amount</p>
              <p className="text-3xl font-bold text-gray-900">$559.00</p>
            </div>
            <Progress
              className={`bg-beige-100 h-2 w-full rounded-xl`}
              value={33}
            />
            <div className="mt-1.5 flex items-center justify-between text-gray-300">
              <p className="text-[13px] font-bold">27.95%</p>
              <p className="text-[13px]">Target of $2,000</p>
            </div>
          </div>
          <FieldGroup>
            <Field className="gap-1.5">
              <FieldLabel className="text-xs text-gray-300">
                Amount to Add
              </FieldLabel>
              <Input className="border-gray-300" />
            </Field>
            <Button
              type="submit"
              className="mt-4 h-12 w-full bg-gray-900 text-white"
            >
              Confirm Addition
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
