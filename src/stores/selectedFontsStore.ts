import { create } from 'zustand';
import { IFontSelected } from '../pages/interfaces';
import _ from 'lodash';

type SelectedFontsState = {
  open: boolean;
  fontsSelected: IFontSelected[];
  toggleOpen: () => void;
  setFontsSelected: (fonts: IFontSelected[]) => void;
  deleteFontSelected: (fontFamily: string) => void;
  deleteFontValueSelected: ({fontFamily, value}:{fontFamily: string, value: string}) => void;
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
    deleteFontValueSelected: ({fontFamily,value}) =>
    set((state) => {
      let newFontsSelected = _.clone(state.fontsSelected)
      newFontsSelected = _.compact(
        _.map(newFontsSelected, (i) => {
          if (i.name !== fontFamily) return i;
          if (
            i.value.length === 1 &&
            i.value[0] === value
          )
            return null;
          return {
            ...i,
            value: _.filter(i.value, (o) => o !== value),
          };
        })
      );
      return { ...state, fontsSelected: newFontsSelected };
    }),
}));

export default useSelectedFontsStore;
