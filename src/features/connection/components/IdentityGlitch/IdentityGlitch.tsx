import React from 'react';
import { useTranslation } from 'react-i18next';

const AVATAR_URL = "/avatar1.jpg";

export const IdentityGlitch: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center space-y-10 group">
      <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />

        <div className="relative w-full h-full rounded-full border-2 border-primary/50 bg-background-dark/80 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-primary shadow-[0_0_30px_hsla(var(--primary)/0.3)]">
          <img
            src={AVATAR_URL}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute -bottom-2 -right-2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg border border-primary/40 font-mono tracking-widest animate-bounce">
          {t('connection.identity.ready')}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white transition-all duration-300 hover:text-primary cursor-default font-display relative inline-block group/glitch leading-none">
          {t('nav.brand').toUpperCase()}
          <span className="absolute inset-0 opacity-0 group-hover/glitch:opacity-20 group-hover/glitch:animate-[pulse_0.1s_infinite] pointer-events-none">
            {t('nav.brand').toUpperCase()}
          </span>
        </h1>

        <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl text-gray-400 font-mono">
          <span className="text-primary font-bold opacity-50">&lt;</span>
          <span className="hover:text-white transition-colors duration-300">{t('connection.identity.role')}</span>
          <span className="text-gray-700">/</span>
          <span className="hover:text-white transition-colors duration-300">{t('connection.identity.framework')}</span>
          <span className="text-primary font-bold opacity-50">/&gt;</span>
        </div>
      </div>
    </div>
  );
};
