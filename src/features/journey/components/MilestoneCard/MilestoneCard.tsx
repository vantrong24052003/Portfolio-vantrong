import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdCode, MdApi } from 'react-icons/md';
import type { MilestoneCardProps } from './types';

export const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone }) => {
  const { t } = useTranslation();
  if (!milestone) return null;

  return (
    <div className="glass-panel rounded-xl p-8 lg:p-10 relative overflow-hidden min-h-[400px] flex flex-col transition-all duration-500 group hover:border-primary/50">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="material-symbols-outlined text-9xl text-primary transform rotate-12">history_edu</span>
      </div>

      <div className="flex justify-between items-start mb-6 border-b border-border pb-4 relative z-10">
        <div>
          <div className="text-primary font-mono text-xs mb-1 uppercase tracking-widest">
            {t('journey.card.timestampLabel')} {milestone.period}
          </div>
          <h2 className="text-3xl font-bold text-foreground uppercase tracking-tight">{milestone.organization}</h2>
          <h3 className="text-xl text-muted-foreground font-light">{milestone.role}</h3>
        </div>
        <div className="h-10 w-10 rounded-full border border-primary/50 flex items-center justify-center bg-primary/10">
          <MdCode className="text-primary text-xl" />
        </div>
      </div>

      <div className="space-y-6 relative z-10 flex-grow">
        <p className="text-muted-foreground leading-relaxed font-display text-lg">
          {milestone.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted p-4 rounded border border-border hover:border-primary transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <MdApi className="text-primary text-sm" />
              <span className="font-bold text-foreground text-sm">{t('journey.card.coreStack')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {milestone.stack.map((tech, idx) => (
                <span key={idx} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-mono border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {milestone.achievement && (
            <div className="bg-muted p-4 rounded border border-border hover:border-primary transition-colors">
              <p className="text-sm text-muted-foreground font-mono italic">
                {milestone.achievement}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-xs text-muted-foreground/60 font-mono relative z-10">
        <span>{t('journey.card.statusActive')}</span>
        <span>{t('journey.card.locLabel')} {milestone.location || t('journey.card.defaultLocation')}</span>
      </div>

    </div>
  );
};
