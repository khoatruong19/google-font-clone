import { create } from 'zustand';
import {
  CATEGORY_OPTIONS,
  DEFAULT_FONT_SIZE,
  LANGUAGE_OPTIONS,
} from '../components/Toolbar/constants';
import { ICheckboxOption, IOption } from '../pages/interfaces';
import { IFilter } from '../utils/queryUtils';
import _ from 'lodash';
import { SORT_BY_OPTIONS } from '../components/FontsContainer/constants';

export interface IFontInGeneral {
  family: string;
  variants: string[];
  category: string;
  subsets: string[];
  fontUrl: string;
}

type FontState = {
  loading: boolean;
  fonts: IFontInGeneral[];
  fontSearchKey: string;
  previewText: string;
  fontSize: IOption;
  categories: ICheckboxOption[];
  language: IOption;
  sortBy: IOption
  pending: () => void;
  setFonts: (fonts: IFontInGeneral[]) => void;
  setFontSearchKey: (key: string) => void;
  setPreviewText: (text: string) => void;
  setFontSize: (size: IOption) => void;
  setCategories: (categories: ICheckboxOption[]) => void;
  setLanguage: (language: IOption) => void;
  setSortBy: (language: IOption) => void;
  setFilters: (filter: IFilter) => void;
  resetFilters: () => void;
};

const useFontStore = create<FontState>((set) => ({
  loading: false,
  fonts: [],
  fontSearchKey: '',
  previewText: '',
  fontSize: DEFAULT_FONT_SIZE,
  categories: CATEGORY_OPTIONS,
  language: LANGUAGE_OPTIONS[0],
  sortBy: SORT_BY_OPTIONS[0],
  pending: () => set((state) => ({ ...state, loading: true })),
  setFonts: (data) => set({ fonts: data, loading: false }),
  setFontSearchKey: (data) =>
    set((state) => ({ ...state, fontSearchKey: data })),
  setPreviewText: (data) => set((state) => ({ ...state, previewText: data })),
  setFontSize: (data) => set((state) => ({ ...state, fontSize: data })),
  setCategories: (data) => set((state) => ({ ...state, categories: data })),
  setLanguage: (data) => set((state) => ({ ...state, language: data })),
  setSortBy: (data) => set((state) => ({ ...state, sortBy: data })),
  setFilters: (data) =>
    set((state) => {
      const {
        language = '',
        categories = '',
        fontSearchKey = '',
        fontSize = '40px',
      } = data;
      const filteredLanguage = _.find(
        LANGUAGE_OPTIONS,
        (o) => o.value === language.replaceAll(' ', '-')
      );

      const filteredCategories = _.map(CATEGORY_OPTIONS, (o) => {
        let value = true;
        if (categories !== "" && !categories.includes(o.title.toLowerCase())) value = false;
        return { ...o, value };
      });

      let filteredFontSize = DEFAULT_FONT_SIZE;
      if (fontSize.split('px').length === 2)
        filteredFontSize = {
          title: fontSize,
          value: fontSize,
        };

      return {
        ...state,
        language: filteredLanguage,
        categories: filteredCategories,
        fontSearchKey,
        fontSize: filteredFontSize,
        loading: false,
      };
    }),
  resetFilters: () =>
    set((state) => ({
      ...state,
      fontSearchKey: '',
      previewText: '',
      fontSize: DEFAULT_FONT_SIZE,
      categories: CATEGORY_OPTIONS,
      language: LANGUAGE_OPTIONS[0],
    })),
}));

export default useFontStore;
