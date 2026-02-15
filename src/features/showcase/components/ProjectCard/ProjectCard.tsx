import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MdLock, MdCode, MdTerminal } from 'react-icons/md';
import type { ProjectCardProps } from './types';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ y: -10, translateZ: 20 }}
      className="glass-panel group rounded-xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-primary/50 relative cursor-pointer transform-gpu"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background system label */}
      <div className="absolute top-2 right-4 text-[10px] text-primary/30 font-mono tracking-widest z-10 group-hover:text-primary transition-colors">
        {project.systemId}
      </div>

      {/* Project Image/Thumbnail container */}
      <div className="relative h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        <motion.img
          animate={{ scale: isHovered ? 1.1 : 1, filter: isHovered ? 'saturate(1.2)' : 'saturate(0)' }}
          src={project.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-all duration-500" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/60 backdrop-blur-sm">
          <div
            className="p-3 bg-primary/20 text-primary-foreground/50 rounded-full cursor-not-allowed flex items-center justify-center border border-primary/20"
            title={t('showcase.card.demoUnavailable')}
          >
            <MdLock className="text-xl" />
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors shadow-lg cursor-pointer flex items-center justify-center"
              title={t('showcase.card.viewCode')}
            >
              <MdCode className="text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col relative">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-primary font-mono tracking-widest uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow font-display">
          {project.description}
        </p>

        {/* Mini Deploy Log */}
        <div className="h-12 overflow-hidden mb-4 bg-black/40 rounded border border-primary/5 p-2 transition-opacity duration-500 opacity-40 group-hover:opacity-100">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9px] font-mono text-primary/80"
              >
                <div className="flex items-center gap-2">
                  <MdTerminal className="animate-pulse" />
                  <span className="uppercase tracking-widest">{t('showcase.card.booting')}</span>
                </div>
                <div className="text-muted-foreground mt-1 truncate">
                  {t('showcase.card.stackPrefix')} {project.stack.join(' / ').toUpperCase()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded-sm border border-border text-muted-foreground group-hover:text-primary group-hover:border-primary transition-all duration-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative accent */}
      <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500" />
    </motion.div>
  );
};
