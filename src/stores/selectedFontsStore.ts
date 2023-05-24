import { create } from 'zustand'

type SelectedFontsState = {
  open: boolean
  toggleOpen: () => void
}

const useSelectedFontsStore = create<SelectedFontsState>((set) => ({
    open  : false,
    toggleOpen: () => set((state) => ({ ...state, open: !state.open })),
}))

export default useSelectedFontsStore