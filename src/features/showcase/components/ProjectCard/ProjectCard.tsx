import React from 'react';
import { MdLock, MdCode } from 'react-icons/md';
import type { ProjectCardProps } from './types';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-panel group rounded-xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 relative cursor-pointer">
      {/* Background system label */}
      <div className="absolute top-2 right-4 text-[10px] text-primary/30 font-mono tracking-widest z-10 group-hover:text-primary transition-colors">
        {project.systemId}
      </div>

      {/* Project Image/Thumbnail container */}
      <div className="relative h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        <img
          src={project.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-all duration-500" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/60 backdrop-blur-sm">
          <div
            className="p-3 bg-primary/20 text-primary-foreground/50 rounded-full cursor-not-allowed flex items-center justify-center border border-primary/20"
            title="Demo Unavailable"
          >
            <MdLock className="text-xl" />
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors shadow-lg cursor-pointer flex items-center justify-center"
              title="View Code"
            >
              <MdCode className="text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-primary font-mono tracking-widest uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow font-display">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
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
    </div>
  );
};
