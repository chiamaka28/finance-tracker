import {create} from 'zustand';

interface DialogState {
   deleteSavingOpen: boolean;
   createPotOpen: boolean;
   EditPotOpen: boolean;
   createBudgetOpen: boolean;
   editBudgetOpen: boolean;
   withdrawPotOpen: boolean;
   addSavingOpen: boolean;

   OpenCreatePotDialog: () => void;
   CloseCreatePotDialog: () => void;
   OpenEditPotDialog: () => void;
   CloseEditPotDialog: () => void;
   OpenCreateBudgetDialog: () => void;
   CloseCreateBudgetDialog: () => void
   OpenEditBudgetDialog: () => void;
   CloseEditBudgetDialog: () => void;
   OpenWithdrawPotDialog: () => void;
   CloseWithdrawPotDialog: () => void;
   OpenAddSavingDialog: () => void;
   CloseAddSavingDialog: () => void;


}

export const useDialogStore = create<DialogState>((set) => ({
    deleteSavingOpen: false,
    createPotOpen: false,
    EditPotOpen: false,
    createBudgetOpen: false,
    editBudgetOpen: false,
    withdrawPotOpen: false,
    addSavingOpen: false,

    CloseDeleteSavingDialog: () => set({ deleteSavingOpen: false }),
    OpenDeleteSavingDialog: () => set({ deleteSavingOpen: true }),
    CloseCreatePotDialog: () => set({ createPotOpen: false }),
    OpenCreatePotDialog: () => set({ createPotOpen: true }),
    CloseEditPotDialog: () => set({ EditPotOpen: false }),
    OpenEditPotDialog: () => set({ EditPotOpen: true }),
    OpenCreateBudgetDialog: () => set({createBudgetOpen: true}),
    CloseCreateBudgetDialog: () => set({createBudgetOpen : false}),
   OpenEditBudgetDialog: () => set({editBudgetOpen: true}),
   CloseEditBudgetDialog: () => set({editBudgetOpen: false }),
   OpenWithdrawPotDialog: () => set({withdrawPotOpen: true}),
   CloseWithdrawPotDialog: () => set({withdrawPotOpen: false}),
   OpenAddSavingDialog: () => set({ addSavingOpen: true}),
   CloseAddSavingDialog: () => set({addSavingOpen: false})

}));