import { create } from 'zustand'
import { CATEGORY_OPTIONS, DEFAULT_FONT_SIZE, LANGUAGE_OPTIONS } from '../components/Toolbar/constants'
import { ICheckboxOption, IOption } from '../pages/interfaces'

export interface IFontInGeneral{
  family: string
  variants: string[]
  category: string
  subsets: string[]
}

type FontState = {
  loading: boolean
  fonts: IFontInGeneral[]
  fontSearchKey: string
  previewText: string
  fontSize: IOption
  categories: ICheckboxOption[]
  language: IOption
  pending: () => void
  setFonts: (fonts: IFontInGeneral[]) => void
  setFontSearchKey: (key: string) => void
  setPreviewText: (text: string) => void
  setFontSize: (size: IOption) => void
  setCategories: (categories: ICheckboxOption[]) => void
  setLanguage: (language: IOption) => void
}

const useFontStore = create<FontState>((set) => ({
    loading: false,
    fonts: [],
    fontSearchKey: "",
    previewText: "",
    fontSize: DEFAULT_FONT_SIZE,
    categories: CATEGORY_OPTIONS,
    language: LANGUAGE_OPTIONS[0],
    pending: () => set((state) => ({ ...state, loading: true })),
    setFonts: (data) => set({ fonts: data, loading: false }),
    setFontSearchKey: (data) => set((state) => ({ ...state, fontSearchKey: data})),
    setPreviewText: (data) => set((state) => ({ ...state, previewText: data})),
    setFontSize: (data) => set((state) => ({ ...state, fontSize: data})),
    setCategories: (data) => set((state) => ({ ...state, categories: data})),
    setLanguage: (data) => set((state) => ({ ...state, language: data})),
}))

export default useFontStore