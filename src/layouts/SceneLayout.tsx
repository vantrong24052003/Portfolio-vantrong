import React, { type ReactNode } from 'react';
import { InteractiveMesh } from '@/shared/components/InteractiveMesh/InteractiveMesh';

interface SceneLayoutProps {
  children: ReactNode;
}

export const SceneLayout: React.FC<SceneLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-primary/30 selection:text-foreground perspective-[1200px]">
      {/* Layer 0: Background Environment */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,hsla(var(--primary)/0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,hsla(var(--primary)/0.05)_0%,transparent_30%)] pointer-events-none" />

      {/* Layer 0.5: Digital River Gradient Overlay */}
      <div className="fixed inset-0 z-0 opacity-90 pointer-events-none bg-linear-to-br from-background via-background/95 to-background/90" />

      {/* Layer 1: Mesh & Scanline */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        <InteractiveMesh />
        <div className="scanline" />
      </div>

      {/* Layer 2: Main Content */}
      <main className="relative z-10 w-full min-h-screen animate-fade-in transform-gpu">
        {children}
      </main>

      {/* Layer 0: Decorative background blobs with drift animation */}
      <div className="fixed bottom-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none z-0 animate-[drift_20s_infinite_linear]" />
      <div className="fixed top-20 right-20 w-96 h-96 bg-accent rounded-full mix-blend-overlay filter blur-[120px] opacity-20 pointer-events-none z-0 animate-[drift_25s_infinite_linear_reverse]" />
    </div>
  );
};
