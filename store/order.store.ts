import { create } from 'zustand';

type OrderStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useOrderStore = create<OrderStore>((set) => ({
  isOpen: false,
  open: () => {
    set({ isOpen: true });
  },
  close: () => {
    set({ isOpen: false });
  },
}));
