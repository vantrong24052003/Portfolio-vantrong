import React, { type ReactNode } from 'react';

interface SceneLayoutProps {
  children: ReactNode;
}

export const SceneLayout: React.FC<SceneLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background-dark selection:bg-primary selection:text-white">
      {/* Background Environment */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,30,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(236,30,19,0.05)_0%,transparent_30%)] pointer-events-none" />

      {/* Digital River Gradient Overlay */}
      <div className="fixed inset-0 z-0 opacity-90 pointer-events-none bg-linear-to-br from-[#1a0505] via-background-dark to-black" />

      {/* Mesh Pattern Overlay */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Scanline Effect */}
      <div className="scanline z-50 pointer-events-none" />

      {/* Content */}
      <main className="relative z-10 w-full min-h-screen">
        {children}
      </main>

      {/* Decorative background blobs */}
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-900 rounded-full mix-blend-overlay filter blur-[120px] opacity-20 pointer-events-none z-0" />
    </div>
  );
};
