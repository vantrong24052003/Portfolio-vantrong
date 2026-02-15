import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ThemePalette, ThemeMode, Theme, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_QUERY_PARAM = 'theme';
const DEFAULT_PALETTE: ThemePalette = 'blue';
const DEFAULT_MODE: ThemeMode = 'dark';

const getInitialTheme = (): { palette: ThemePalette; mode: ThemeMode } => {
  const params = new URLSearchParams(window.location.search);
  const themeParam = params.get(THEME_QUERY_PARAM);

  if (themeParam) {
    const [p, m] = themeParam.split('-') as [ThemePalette, ThemeMode];
    if (p && ['red', 'blue', 'green', 'purple', 'orange', 'pink'].includes(p) &&
      m && ['light', 'dark'].includes(m)) {
      return { palette: p, mode: m };
    }
  }

  return { palette: DEFAULT_PALETTE, mode: DEFAULT_MODE };
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [palette, setPaletteState] = useState<ThemePalette>(() => getInitialTheme().palette);
  const [mode, setModeState] = useState<ThemeMode>(() => getInitialTheme().mode);

  const theme: Theme = `${palette}-${mode}`;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    // Update URL
    const url = new URL(window.location.href);
    if (palette === DEFAULT_PALETTE && mode === DEFAULT_MODE) {
      url.searchParams.delete(THEME_QUERY_PARAM);
    } else {
      url.searchParams.set(THEME_QUERY_PARAM, theme);
    }
    window.history.replaceState({}, '', url.toString());
  }, [palette, mode, theme]);

  const setPalette = useCallback((p: ThemePalette) => {
    setPaletteState(p);
  }, []);

  const setMode = useCallback((m: ThemeMode) => {
    setModeState(m);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = React.useMemo(() => ({
    palette,
    mode,
    theme,
    setPalette,
    setMode,
    toggleMode,
  }), [palette, mode, theme, setPalette, setMode, toggleMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
