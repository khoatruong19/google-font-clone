import { create } from 'zustand';
import { IFontSelected } from '../pages/interfaces';
import _ from 'lodash';

type SelectedFontsState = {
  open: boolean;
  fontsSelected: IFontSelected[];
  toggleOpen: () => void;
  setFontsSelected: (fonts: IFontSelected[]) => void;
  deleteFontSelected: (fontFamily: string) => void;
};

const useSelectedFontsStore = create<SelectedFontsState>((set) => ({
  open: false,
  fontsSelected: [],
  toggleOpen: () => set((state) => ({ ...state, open: !state.open })),
  setFontsSelected: (data) =>
    set((state) => ({ ...state, fontsSelected: data })),
  deleteFontSelected: (data) =>
    set((state) => {
      const newFontsSelected = _.filter(
        state.fontsSelected,
        (i) => i.name !== data
      );
      return { ...state, fontsSelected: newFontsSelected };
    }),
}));

export default useSelectedFontsStore;
