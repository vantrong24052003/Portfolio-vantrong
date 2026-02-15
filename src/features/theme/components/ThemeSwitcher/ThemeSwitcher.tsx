import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Palette, Sun, Moon, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { ThemePalette } from '../../types';

const palettes: { id: ThemePalette; color: string; name: string }[] = [

  { id: 'red', color: 'rgb(236, 30, 19)', name: 'Red' },
  { id: 'blue', color: 'rgb(102, 133, 255)', name: 'Blue' },
  { id: 'green', color: 'rgb(16, 185, 129)', name: 'Green' },
  { id: 'purple', color: 'rgb(139, 92, 246)', name: 'Purple' },
  { id: 'orange', color: 'rgb(249, 115, 22)', name: 'Orange' },
  { id: 'pink', color: 'rgb(236, 72, 153)', name: 'Pink' },
];

export const ThemeSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const { palette, mode, setPalette, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-card/80 backdrop-blur-md border border-border rounded-full hover:border-primary/50 transition-all duration-300 group cursor-pointer"
        title={t('common.theme.title')}
      >
        <Palette className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[60]"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-full right-0 mb-4 z-[70] min-w-[200px] bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Mode Toggle */}
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-sm font-medium text-foreground">{t('common.theme.mode')}</span>
                <button
                  onClick={toggleMode}
                  className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full hover:bg-muted/80 transition-colors cursor-pointer"
                >
                  {mode === 'dark' ? (
                    <>
                      <Moon className="w-4 h-4 text-primary" />
                      <span className="text-xs font-mono">{t('common.theme.dark')}</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-mono">{t('common.theme.light')}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Palette Selection */}
              <div className="grid grid-cols-3 gap-3">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPalette(p.id)}
                    className="flex flex-col items-center gap-1.5 group cursor-pointer"
                    title={t(`common.palettes.${p.id}`)}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center",
                        palette === p.id ? "border-primary scale-110" : "border-transparent scale-100 hover:scale-105"
                      )}
                      style={{ backgroundColor: p.color }}
                    >
                      {palette === p.id && <Check className="w-4 h-4 text-white drop-shadow-sm" />}
                    </div>
                    <span className={cn(
                      "text-[10px] uppercase tracking-wider font-bold transition-colors",
                      palette === p.id ? "text-primary" : "text-muted-foreground"
                    )}>
                      {p.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Helper for class names since I don't know if 'cn' is available
function cn(...inputs: unknown[]) {
  return inputs.filter(Boolean).join(' ');
}
