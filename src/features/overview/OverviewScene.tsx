import React from 'react';
import { SceneLayout } from '@/layouts';
import { IdentityModule, CodeEditor } from '@/features/overview/components';

export const OverviewScene: React.FC<{ onContactClick?: () => void }> = ({ onContactClick }) => {
  return (
    <SceneLayout>
      <div className="flex-grow flex flex-col lg:flex-row items-center justify-center p-6 md:p-12 lg:px-24 gap-8 lg:gap-24 w-full min-h-screen">
        <IdentityModule onContactClick={onContactClick} />
        <CodeEditor />
      </div>
    </SceneLayout>
  );
};
