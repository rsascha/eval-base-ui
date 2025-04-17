import { create } from "zustand";

const itemsInit = [
  { id: 0, title: "Transfer inklusive", eye: true },
  { id: 1, title: "Meerblick", eye: false },
  { id: 2, title: "Unser Tipp!", eye: true },
  { id: 3, title: "Tolle Familien-Suites", eye: false },
  { id: 4, title: "Ausflugs-Specials", eye: true },
  { id: 5, title: "Wellness & Spa", eye: false },
  { id: 6, title: "Golf", eye: true },
];

type State = {
  items: typeof itemsInit;
  setItems: (items: typeof itemsInit) => void;
  sortItems: (itemIds: number[]) => void;
  toggleEye: (itemId: number) => void;
};

const useAttributeData = create<State>((set) => ({
  items: itemsInit,
  setItems: (items) => set({ items }),
  sortItems: (itemIds) =>
    set((state) => {
      const sortedItems = itemIds.map((id) =>
        state.items.find((item) => item.id === id)
      );
      return { items: sortedItems.filter((item) => item !== undefined) };
    }),
  toggleEye: (itemId) =>
    set((state) => {
      const items = state.items.map((item) =>
        item.id === itemId ? { ...item, eye: !item.eye } : item
      );
      return { items };
    }),
}));

export { useAttributeData };
