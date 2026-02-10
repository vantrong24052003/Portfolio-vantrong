import React from 'react';
import { useTranslation } from 'react-i18next';
import { scenes } from './constants';
export interface SceneNavigatorProps {
  currentScene: number;
  onSceneChange: (sceneId: number) => void;
}

export const SceneNavigator: React.FC<SceneNavigatorProps> = ({ currentScene, onSceneChange }) => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 h-20 bg-background/50 backdrop-blur-md border-b border-border">
      <div className="w-full px-6 md:px-12 lg:px-24 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold tracking-[0.2em] text-foreground uppercase drop-shadow-md">
            {t('nav.brand')}
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 text-[10px] font-mono tracking-[0.3em]">
            {scenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => onSceneChange(scene.id)}
                className={`transition-all duration-300 hover:text-primary cursor-pointer ${currentScene === scene.id
                  ? 'text-primary font-bold border-b border-primary/50 pb-1'
                  : 'text-muted-foreground'
                  }`}
              >
                {t(`nav.scenes.${scene.translationKey}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <span className="text-primary font-bold text-xs font-mono">{t(`nav.scenes.${scenes[currentScene].translationKey}`).toUpperCase()}</span>
        </div>
      </div>
    </nav>
  );
};
