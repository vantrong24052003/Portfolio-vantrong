import React from 'react';
import type { HighlightsChipProps } from './types';

export const HighlightsChip: React.FC<HighlightsChipProps> = ({ icon: Icon, label }) => (
  <div className="flex items-center space-x-2 bg-background-dark/50 border border-white/10 px-4 py-2 rounded-lg hover:border-primary/50 transition-colors cursor-default animate-in fade-in zoom-in duration-700">
    <Icon className="text-primary" />
    <span className="text-sm font-medium tracking-wide text-gray-200">{label}</span>
  </div>
);

export default HighlightsChip;
