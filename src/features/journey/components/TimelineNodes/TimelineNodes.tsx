import React from 'react';
import type { TimelineNodesProps } from './types';

export const TimelineNodes: React.FC<TimelineNodesProps> = ({ milestones, activeIndex, onSelect }) => {
  return (
    <div className="w-full lg:w-1/4 h-full relative">
      {/* Desktop Vertical Line */}
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 border-l-2 border-dashed border-primary/20 transition-opacity duration-500" />

      <div className="flex flex-row lg:flex-col justify-between lg:justify-start lg:gap-12 relative w-full lg:pl-10">
        {milestones.map((milestone, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`group relative flex flex-col lg:flex-row items-center lg:items-start gap-4 transition-all duration-300 focus:outline-none text-left cursor-pointer`}
            >
              {/* Dot / Indicator */}
              <div className={`
                ${isActive ? 'w-6 h-6 -ml-3' : 'w-4 h-4 -ml-2'} 
                absolute left-0 lg:static top-1/2 lg:top-auto -translate-y-1/2 lg:translate-y-0
                rounded-full border-2 transition-all duration-500 z-10
                ${isActive ? 'bg-primary border-background shadow-[0_0_20px_hsla(var(--primary)/0.6)]' : 'bg-muted border-primary group-hover:bg-primary/50'}
              `} />

              {/* Ping Animation for Active */}
              {isActive && (
                <div className="absolute left-0 lg:left-[1rem] top-1/2 lg:top-[12px] -translate-y-1/2 lg:translate-y-0 w-6 h-6 rounded-full border border-primary opacity-50 animate-ping z-0" />
              )}

              {/* Label */}
              <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0">
                <span className={`font-mono transition-all duration-300 ${isActive ? 'text-lg text-primary font-bold' : 'text-sm text-muted-foreground group-hover:text-primary font-bold'}`}>
                  {milestone.year}
                </span>
                <span className={`text-[10px] uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-primary font-bold' : 'text-muted-foreground/80 group-hover:text-foreground'}`}>
                  {milestone.shortTitle}
                </span>
                {isActive && (
                  <span className="text-[10px] text-muted-foreground/60 mt-1 animate-in fade-in slide-in-from-left-2 duration-500">
                    {milestone.subLabel || 'Current Role'}
                  </span>
                )}
              </div>

            </button>
          );
        })}
      </div>
    </div>
  );
};
