import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

export const useTestStore = create<State>()(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => {
        set((state) => ({
          bears: state.bears + 1,
        }));
        console.log("state", useTestStore.getState());
      },
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
    }),
    {
      name: "test",
    }
  )
);
