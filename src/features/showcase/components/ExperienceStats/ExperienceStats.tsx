import React from 'react';

const ExperienceStats: React.FC = () => {
  return (
    <div className="mt-20 flex justify-center border-t border-primary/20 pt-10 opacity-75">
      <div className="text-center p-8 border border-primary/10 bg-black/20 rounded-lg backdrop-blur-sm max-w-md w-full relative overflow-hidden group">
        {/* Animated scanning line across the block */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 animate-[flow_2s_linear_infinite]" />

        <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
          NEARLY 1 YEAR
        </div>
        <div className="text-sm text-primary uppercase tracking-[0.3em] font-mono">
          System Experience
        </div>
      </div>
    </div>
  );
};

export default ExperienceStats;
