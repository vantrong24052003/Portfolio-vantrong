import React from 'react';
import { useTranslation } from 'react-i18next';
import { SceneLayout } from '@/layouts';
import { IdentityGlitch, ContactLinks, HighlightsChip } from '@/features/connection/components';
import { FaArrowRight } from 'react-icons/fa';

export const ConnectionScene: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SceneLayout>
      <div className="flex-grow flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 min-h-screen">
        <div className="glass-panel w-full max-w-7xl p-10 md:p-16 lg:p-24 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/40 rounded-tl-2xl -translate-x-1 -translate-y-1" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/40 rounded-br-2xl translate-x-1 translate-y-1" />
          <div className="absolute top-4 right-4 text-[10px] text-primary/60 font-mono tracking-[0.3em]">{t('connection.techId')}</div>

          <div className="flex flex-col items-center text-center space-y-10">
            <IdentityGlitch />

            <div className="flex flex-wrap justify-center gap-4">
              <HighlightsChip icon={FaArrowRight} label={t('connection.chips.experience')} />
              <HighlightsChip icon={FaArrowRight} label={t('connection.chips.location')} />
            </div>

            <div className="w-24 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent rounded-full" />

            <ContactLinks />

            <div className="pt-6 w-full flex justify-center">
              <button className="relative group overflow-hidden bg-primary text-primary-foreground font-bold py-4 px-10 rounded-lg tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:shadow-[0_0_20px_hsla(var(--primary)/0.5)] active:scale-95 cursor-pointer">
                <span className="relative z-10 flex items-center gap-2">
                  {t('connection.button')}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-accent/20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SceneLayout>
  );
};
