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
import { ChevronDownIcon } from '@/lib/icons';

export function AddSavingDialog() {
  const { addSavingOpen, CloseAddSavingDialog } = useDialogStore();
  return (
    <Dialog open={addSavingOpen} onOpenChange={CloseAddSavingDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">
            Add to ‘Savings’
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-300">
            Add money to your pot to keep it separate from your main balance. As
            soon as you add this money, it will be deducted from your current
            balance.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
