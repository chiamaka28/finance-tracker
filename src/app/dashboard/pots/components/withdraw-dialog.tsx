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

export function WithdrawPotDialog() {
  const { withdrawPotOpen, CloseWithdrawPotDialog } = useDialogStore();
  return (
    <Dialog open={withdrawPotOpen} onOpenChange={CloseWithdrawPotDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">
            Withdraw from ‘Savings’
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-300">
            Withdraw from your pot to put money back in your main balance. This
            will reduce the amount you have in this pot.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
