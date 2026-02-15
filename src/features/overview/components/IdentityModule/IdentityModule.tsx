import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGem, FaNodeJs, FaReact, FaVuejs, FaGithub, FaFacebook, FaEnvelope, FaInstagram, FaDownload, FaLaravel, FaTrophy, FaGraduationCap } from 'react-icons/fa';
import { MdTerminal, MdArrowForwardIos } from 'react-icons/md';
import type { TechBadgeProps, SocialLinkProps } from './types';

const TechBadge: React.FC<TechBadgeProps> = ({ icon: Icon, label, colorClass, borderOnly = true }) => (
  <div className={`flex items-center gap-2 ${borderOnly ? 'bg-muted/50 border border-border' : 'bg-primary/10 border border-primary/30'} px-3 py-1.5 rounded text-sm group cursor-default transition-all duration-300 hover:border-primary/50`}>
    <Icon className={`${colorClass || 'text-muted-foreground group-hover:text-primary'}`} />
    <span className={`font-mono ${borderOnly ? 'text-muted-foreground group-hover:text-foreground' : 'text-primary font-semibold'}`}>
      {label}
    </span>
  </div>
);

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, label, href = "#" }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer"
  >
    <Icon className="text-xl" />
  </a>
);

export const IdentityModule: React.FC<{ onContactClick?: () => void }> = ({ onContactClick }) => {
  const { t } = useTranslation();

  return (
    <section className="w-full lg:w-7/12 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 transform-gpu">
      <div className="glass-panel rounded-xl p-8 md:p-10 relative overflow-hidden group transition-colors duration-500 hover:border-primary/50">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

        <div className="space-y-6">
          <div>
            <h2 className="text-primary font-mono text-sm tracking-[0.2em] mb-2 flex items-center gap-2">
              <MdTerminal className="text-base" />
              {t('overview.title')}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-1 cursor-default">
              <span className="hover:animate-glitch hover:glow-ruby transition-all duration-100 block">
                {t('nav.brand').split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground to-muted-foreground hover:animate-glitch hover:glow-ruby transition-all duration-100 block">
                {t('nav.brand').split(' ').slice(2).join(' ')}
              </span>
            </h3>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-primary/30 pl-4 font-display">
            {t('overview.bio').split('{{framework}}')[0]}
            <span className="text-primary font-semibold">{t('overview.framework')}</span>
            {t('overview.bio').split('{{framework}}')[1]}
          </p>

          {/* Achievement Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 flex items-center gap-4 transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-500/50 group/ach shadow-[0_0_15px_hsla(var(--primary)/0.05)]">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 group-hover/ach:scale-110 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-amber-500/60 uppercase tracking-widest">{t('journey.milestones.education.subLabel')}</div>
                <div className="text-sm font-bold text-amber-500/90">{t('overview.achievements.honors')}</div>
              </div>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 flex items-center gap-4 transition-all duration-300 hover:bg-accent/10 hover:border-accent/40 group/ach">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover/ach:scale-110 transition-transform shadow-[0_0_10px_hsla(var(--accent)/0.2)]">
                <FaTrophy className="text-xl" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-accent/60 uppercase tracking-widest">{t('overview.achievements.scientificResearch')}</div>
                <div className="text-sm font-bold text-foreground">{t('overview.achievements.nckh')}</div>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-3 py-2">
            <TechBadge icon={FaGem} label={t('overview.techBadges.ruby')} colorClass="text-primary" borderOnly={false} />
            <TechBadge icon={FaNodeJs} label={t('overview.techBadges.nodejs')} colorClass="text-green-500" />
            <TechBadge icon={FaReact} label={t('overview.techBadges.react')} colorClass="text-blue-400" />
            <TechBadge icon={FaVuejs} label={t('overview.techBadges.vue')} colorClass="text-emerald-400" />
            <TechBadge icon={FaLaravel} label={t('overview.techBadges.laravel')} colorClass="text-red-500" />
          </div>

          <div className="h-px w-full bg-linear-to-r from-primary/50 to-transparent my-2" />

          {/* Footer Actions */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
            <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full sm:w-auto">
              <button
                onClick={onContactClick}
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-3 px-6 rounded-lg shadow-[0_0_15px_hsla(var(--primary)/0.4)] hover:shadow-[0_0_25px_hsla(var(--primary)/0.6)] transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer whitespace-nowrap flex-1 sm:flex-none"
              >
                <span>{t('overview.button')}</span>
                <MdArrowForwardIos className="group-hover/btn:translate-x-1 transition-transform text-sm" />
              </button>

              <a
                href="/cv-doanvovantrong.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/40 hover:bg-card/60 text-foreground border border-border hover:border-primary/50 backdrop-blur-md font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/cv cursor-pointer whitespace-nowrap flex-1 sm:flex-none"
              >
                <FaDownload className="group-hover:translate-y-0.5 transition-transform text-primary" />
                <span>{t('overview.downloadCV')}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <SocialLink icon={FaGithub} label={t('connection.labels.github')} href="https://github.com/vantrong2405" />
              <SocialLink icon={FaFacebook} label={t('connection.labels.facebook')} href="https://www.facebook.com/doanvo.vantrong" />
              <SocialLink icon={FaInstagram} label={t('connection.labels.instagram')} href="https://www.instagram.com/trongvan2405/" />
              <SocialLink icon={FaEnvelope} label={t('connection.labels.email')} href="mailto:trongdn2405@gmail.com" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Stats */}
      <div className="flex justify-end px-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
        <div>{t('overview.stats.location')}</div>
      </div>
    </section>
  );
};
