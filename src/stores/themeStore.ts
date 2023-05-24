import { create } from 'zustand';

type ThemeState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}));

export default useThemeStore;
