import React from 'react';
import { SceneLayout } from '@/layouts';
import { IdentityModule } from '@/features/overview/components';

export const OverviewScene: React.FC<{ onContactClick?: () => void }> = ({ onContactClick }) => {
  return (
    <SceneLayout>
      <div className="flex-grow flex items-center justify-center py-32 px-6 md:px-12 lg:px-24 w-full min-h-screen">
        <IdentityModule onContactClick={onContactClick} />
      </div>
    </SceneLayout>
  );
};
