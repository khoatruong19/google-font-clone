import { create } from 'zustand'

export interface IFontInGeneral{
  family: string
  variants: string[]
  category: string
  regularFontUrl: string
}

type FontState = {
  loading: boolean
  fonts: IFontInGeneral[]
  pending: () => void
  setFonts: (data: IFontInGeneral[]) => void
}

const useFontStore = create<FontState>((set) => ({
    loading: false,
    fonts: [],
    pending: () => set((state) => ({ ...state, loading: true })),
    setFonts: (data: IFontInGeneral[]) => set({ fonts: data, loading: false }),
}))

export default useFontStore