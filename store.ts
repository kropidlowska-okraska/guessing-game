import { create } from 'zustand'

export type Store = {
    chosenNumber: number,
    updateChosenNumber: (number: number) => void
    roundsNumber: number,
    updateRoundsNumber: () => void
}

export const useStore = create<Store>((set) => ({
    chosenNumber: 0,
    updateChosenNumber: (number) => set({ chosenNumber: number }),
    roundsNumber: 0,
    updateRoundsNumber: () => set((state) => ({ roundsNumber: state.roundsNumber + 1 }))
}))