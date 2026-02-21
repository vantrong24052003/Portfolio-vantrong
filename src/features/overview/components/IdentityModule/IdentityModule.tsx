import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGem, FaNodeJs, FaGithub, FaFacebook, FaEnvelope, FaTrophy, FaGraduationCap, FaDocker, FaAws, FaAward } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import { MdArrowForwardIos, MdVerified } from 'react-icons/md';
import type { SocialLinkProps } from './types';

const AVATAR_URL = "/avatar.jpg";

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
    <div className="w-full max-w-7xl flex flex-col items-center gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 transform-gpu py-12">
      <div className="w-full relative overflow-visible group">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-center relative z-10">

          {/* Information Section (Left) */}
          <div className="flex-grow space-y-10 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-primary font-mono text-sm tracking-[0.5em] flex items-center justify-center lg:justify-start gap-4">
                <div className="w-8 h-[1px] bg-primary/50" />
                {t('overview.title')}
              </h2>
              <div className="flex flex-col gap-4">
                <h3 className="text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-[0.9] cursor-default tracking-tighter">
                  <span className="hover:animate-glitch hover:glow-ruby transition-all duration-100 block">
                    {t('nav.brand').split(' ').slice(0, 2).join(' ')}
                  </span>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground/80 to-muted-foreground/50 hover:animate-glitch hover:glow-ruby transition-all duration-100 block">
                    {t('nav.brand').split(' ').slice(2).join(' ')}
                  </span>
                </h3>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold px-4 py-1.5 rounded-full animate-fade-in w-fit mx-auto lg:mx-0 font-mono tracking-widest uppercase">
                  <MdVerified className="text-xs" />
                  {t('overview.stats.experience')}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-display max-w-2xl mx-auto lg:mx-0 opacity-80 italic">
              " {t('overview.bio').split('{{framework}}')[0]}
              <span className="text-primary not-italic font-bold">{t('overview.framework')}</span>
              {t('overview.bio').split('{{framework}}')[1]} "
            </p>

            {/* Achievement Badges - More Minimal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex flex-col items-center lg:items-start gap-3 group/ach">
                <FaAward className="text-3xl text-amber-500/60 group-hover/ach:text-amber-500 transition-colors" />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">{t('overview.achievements.rubySilver')}</div>
                  <div className="text-base font-bold text-foreground/80">Ruby Silver</div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 group/ach">
                <FaGraduationCap className="text-3xl text-primary/60 group-hover/ach:text-primary transition-colors" />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">{t('journey.milestones.education.subLabel')}</div>
                  <div className="text-base font-bold text-foreground/80">{t('overview.achievements.honors')}</div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 group/ach">
                <FaTrophy className="text-3xl text-primary/60 group-hover/ach:text-primary transition-colors" />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">{t('overview.achievements.scientificResearch')}</div>
                  <div className="text-base font-bold text-foreground/80">{t('overview.achievements.nckh')}</div>
                </div>
              </div>
            </div>

            {/* Tech Categories */}
            <div className="flex flex-col gap-6 pt-4">
              {/* Backend & Frontend */}
              <div className="flex flex-col items-center lg:items-start gap-3">
                <div className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.3em] font-bold">Backend Engineering</div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-70 hover:opacity-100 transition-opacity">
                  <FaGem className="text-3xl text-primary hover:scale-125 transition-transform cursor-help" title="Ruby" />
                  <FaNodeJs className="text-3xl text-green-500 hover:scale-125 transition-transform cursor-help" title="Node.js" />
                </div>
              </div>

              {/* DevOps & Infra */}
              <div className="flex flex-col items-center lg:items-start gap-3">
                <div className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.3em] font-bold">DevOps & Cloud</div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-70 hover:opacity-100 transition-opacity">
                  <FaDocker className="text-3xl text-blue-500 hover:scale-125 transition-transform cursor-help" title="Docker" />
                  <SiKubernetes className="text-3xl text-blue-400 hover:scale-125 transition-transform cursor-help" title="Kubernetes" />
                  <FaAws className="text-3xl text-orange-400 hover:scale-125 transition-transform cursor-help" title="AWS" />
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <button
                onClick={onContactClick}
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-[0_0_30px_hsla(var(--primary)/0.4)] transition-all duration-300 flex items-center justify-center gap-3 group/btn cursor-pointer whitespace-nowrap tracking-widest text-xs"
              >
                <span>{t('overview.button').toUpperCase()}</span>
                <MdArrowForwardIos className="group-hover/btn:translate-x-1 transition-transform text-xs" />
              </button>

              <div className="flex items-center gap-6">
                <SocialLink icon={FaGithub} label={t('connection.labels.github')} href="https://github.com/vantrong2405" />
                <SocialLink icon={FaFacebook} label={t('connection.labels.facebook')} href="https://www.facebook.com/doanvo.vantrong" />
                <SocialLink icon={FaEnvelope} label={t('connection.labels.email')} href="mailto:trongdn2405@gmail.com" />
              </div>
            </div>
          </div>

          {/* Huge Avatar - No Border, Masked for Seamless Blend */}
          <div className="relative shrink-0 order-1 lg:order-2">
            <div className="absolute -inset-20 bg-primary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
            <div className="relative w-72 h-[450px] md:w-96 md:h-[600px] lg:w-[500px] lg:h-[750px] pointer-events-none select-none">
              <img
                src={AVATAR_URL}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-1000 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              />
              {/* Status indicator */}
              <div className="absolute bottom-20 -left-6 flex items-center gap-3 bg-background/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl z-20 pointer-events-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,1)]" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Location Badge */}
      <div className="w-full flex justify-end px-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest opacity-60">
        <div>{t('overview.stats.location')}</div>
      </div>
    </div>
  );
};
