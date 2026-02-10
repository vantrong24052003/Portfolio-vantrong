import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import { scenes } from './constants';

const LANGUAGE_EN = 'en';
const LANGUAGE_VI = 'vi';

export interface SceneNavigatorProps {
  currentScene: number;
  onSceneChange: (sceneId: number) => void;
}

export const SceneNavigator: React.FC<SceneNavigatorProps> = ({ currentScene, onSceneChange }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === LANGUAGE_EN ? LANGUAGE_VI : LANGUAGE_EN;
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 w-full z-50 h-20 bg-background-dark/50 backdrop-blur-md border-b border-primary/10">
      <div className="w-full px-6 md:px-12 lg:px-24 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">
            {t('nav.brand')}
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="relative overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-white hover:border-primary transition-all duration-300 cursor-pointer group"
            aria-label="Toggle language"
          >
            <div className="flex items-center gap-2">
              <MdLanguage className="text-base group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-mono text-xs tracking-wider font-semibold">
                {i18n.language === LANGUAGE_EN ? 'EN' : 'VI'}
              </span>
            </div>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          <div className="flex items-center gap-8 text-[10px] font-mono tracking-[0.3em]">
            {scenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => onSceneChange(scene.id)}
                className={`transition-all duration-300 hover:text-primary cursor-pointer ${currentScene === scene.id
                  ? 'text-primary font-bold border-b border-primary/50 pb-1'
                  : 'text-gray-400'
                  }`}
              >
                {t(`nav.scenes.${scene.translationKey}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-white hover:border-primary transition-all duration-300 cursor-pointer"
            aria-label="Toggle language"
          >
            <MdLanguage className="text-sm" />
            <span className="font-mono text-[10px] font-semibold">{i18n.language.toUpperCase()}</span>
          </button>

          <span className="text-primary font-bold text-xs font-mono">{t(`nav.scenes.${scenes[currentScene].translationKey}`).toUpperCase()}</span>
        </div>
      </div>
    </nav>
  );
};
