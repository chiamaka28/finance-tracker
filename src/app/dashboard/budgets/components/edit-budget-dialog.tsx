'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { ChevronDownIcon } from '@/lib/icons';
import { useDialogStore } from '@/stores/dialog-store';
import { useState } from 'react';

export function EditBudgetDialog() {
  const { editBudgetOpen, CloseEditBudgetDialog } = useDialogStore();
  const colorMap: Record<string, string> = {
    'bg-green-400': '[&>div]:bg-green-400',
    'bg-gray-500': '[&>div]:bg-gray-500',
    'bg-cyan': '[&>div]:bg-cyan',
    'bg-yellow': '[&>div]:bg-yellow',
    'bg-purple': '[&>div]:bg-purple',
  };
  const [color, setColor] = useState<string>(BUDGET_COLORS[0].value);
  return (
    <Dialog open={editBudgetOpen} onOpenChange={CloseEditBudgetDialog}>
      <DialogContent className="h-128 p-6 sm:max-w-140">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 sm:text-3xl">
            Edit Budget
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-300">
            As your budgets change, feel free to update your spending limits.
          </DialogDescription>
        </DialogHeader>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel className="text-xs text-gray-300">
                Budget Category
              </FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-white">
                  <SelectGroup>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="bills">Bills</SelectItem>
                    <SelectItem value="groceries">Groceries</SelectItem>
                    <SelectItem value="dining-out">Dining Out</SelectItem>
                    <SelectItem value="transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="personal-care">Personal Care</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="shopping">Shopping</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel className="text-xs text-gray-300">
                Maximum Spend
              </FieldLabel>
              <Input
                type="number"
                placeholder="e.g., 1000.00"
                className="border-beige-500"
              />
            </Field>
            <Field>
              <FieldLabel className="text-xs text-gray-300">Theme</FieldLabel>
              <Select value={color} onValueChange={setColor}>
                <SelectTrigger className="border-beige-500 w-full">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      {BUDGET_COLORS.find((c) => c.value === color)?.label}
                    </div>
                  </SelectValue>
                  <ChevronDownIcon />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    {BUDGET_COLORS.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-4 w-4 rounded-full"
                            style={{ backgroundColor: c.value }}
                          />
                          {c.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Button
              type="submit"
              className="mt-4 h-12 w-full bg-gray-900 text-white"
            >
              Save Changes
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}

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
