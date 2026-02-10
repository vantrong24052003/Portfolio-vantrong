import React from 'react';
import { useTranslation } from 'react-i18next';

const AVATAR_URL = "/avatar.jpg";

export const IdentityGlitch: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center space-y-10 group">
      <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />

        <div className="relative w-full h-full rounded-full border-2 border-primary/50 bg-background-dark/80 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-primary">
          <img
            src={AVATAR_URL}
            alt="Identity Visualization"
            className="opacity-100 object-cover w-full h-full transition-all duration-500"
          />
        </div>

        <div className="absolute -bottom-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg border border-red-900 font-mono tracking-widest">
          {t('connection.identity.ready')}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white transition-all duration-300 hover:text-primary cursor-default font-display relative inline-block group/glitch">
          {t('nav.brand').toUpperCase()}
          <span className="absolute inset-0 opacity-0 group-hover/glitch:opacity-20 group-hover/glitch:animate-[pulse_0.1s_infinite] pointer-events-none">
            {t('nav.brand').toUpperCase()}
          </span>
        </h1>

        <div className="flex items-center justify-center space-x-3 text-lg md:text-xl text-gray-400 font-mono">
          <span className="text-primary">&lt;</span>
          <span className="hover:text-white transition-colors duration-300">{t('connection.identity.role')}</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-white transition-colors duration-300">{t('connection.identity.framework')}</span>
          <span className="text-primary">/&gt;</span>
        </div>
      </div>
    </div>
  );
};
