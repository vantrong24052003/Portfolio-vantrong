import React from 'react';
import { useTranslation } from 'react-i18next';

export const ExperienceStats: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20 flex justify-center border-t border-border/20 pt-10">
      <div className="text-center p-8 border border-border bg-muted/10 rounded-lg backdrop-blur-sm max-w-md w-full relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 animate-[flow_2s_linear_infinite]" />

        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tighter uppercase">

          {t('showcase.stats.title')}
        </div>
        <div className="text-sm text-primary uppercase tracking-[0.3em] font-mono">
          {t('showcase.stats.subtitle')}
        </div>
      </div>
    </div>
  );
};

export default ExperienceStats;
