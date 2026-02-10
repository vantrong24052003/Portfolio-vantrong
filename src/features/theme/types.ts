export type ThemePalette = 'red' | 'blue' | 'green' | 'purple' | 'orange' | 'pink';
export type ThemeMode = 'light' | 'dark';

export type Theme = `${ThemePalette}-${ThemeMode}`;

export interface ThemeContextType {
  palette: ThemePalette;
  mode: ThemeMode;
  theme: Theme;
  setPalette: (palette: ThemePalette) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}
