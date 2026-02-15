import React from 'react';
import { useTranslation } from 'react-i18next';
import { scenes } from './constants';

export interface SystemHeaderProps {
  currentScene: number;
  onSceneChange: (sceneId: number) => void;
}

export const SystemHeader: React.FC<SystemHeaderProps> = ({ currentScene, onSceneChange }) => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 w-full z-50 h-16 glass-panel border-b border-primary/20">
      <div className="w-full px-6 md:px-12 lg:px-24 h-full flex items-center justify-between transform-gpu">
        {/* Brand Section */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onSceneChange(0)}>
          <div className="w-1.5 h-6 bg-primary rounded-sm shadow-[0_0_10px_hsla(var(--primary)/0.7)] animate-pulse" />
          <h1 className="text-lg font-bold tracking-[0.2em] text-foreground uppercase transition-all duration-300 group-hover:glow-ruby">
            {t('nav.brand')}
          </h1>
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[10px] font-mono tracking-[0.3em]">
            {scenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => onSceneChange(scene.id)}
                className={`transition-all duration-300 hover:text-primary cursor-pointer relative py-2 ${currentScene === scene.id ? 'text-primary font-bold' : 'text-muted-foreground'
                  }`}
              >
                {t(`nav.scenes.${scene.translationKey}`)}
                {currentScene === scene.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_8px_hsla(var(--primary)/0.5)] animate-in fade-in slide-in-from-left-2" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Indicator */}
        <div className="md:hidden flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded">
          <span className="text-primary font-bold text-[10px] font-mono uppercase tracking-widest">
            {t(`nav.scenes.${scenes[currentScene].translationKey}`)}
          </span>
        </div>
      </div>
    </header>
  );
};
