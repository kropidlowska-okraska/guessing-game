import { create } from 'zustand'

export type Store = {
    chosenNumber: number,
    updateChosenNumber: (number: number) => void
}

export const useStore = create<Store>((set) => ({
    chosenNumber: 0,
    updateChosenNumber: (number) => set({ chosenNumber: number })
}))