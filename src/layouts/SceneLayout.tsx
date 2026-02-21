import React, { type ReactNode } from 'react';

interface SceneLayoutProps {
  children: ReactNode;
}

export const SceneLayout: React.FC<SceneLayoutProps> = ({ children }) => {
  return (
    <div className="relative z-10 w-full min-h-screen animate-fade-in transform-gpu flex flex-col items-center justify-center">
      {children}
    </div>
  );
};
