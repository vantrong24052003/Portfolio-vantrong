import React, { useState } from 'react';
import { SceneLayout } from '@/layouts';
import { TimelineNodes, MilestoneCard } from '@/features/journey/components';
import { useMilestones } from '@/features/journey/data';

export const JourneyScene: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const milestones = useMilestones();

  return (
    <SceneLayout>
      <div className="flex-grow relative z-10 w-full px-6 md:px-12 lg:px-24 py-20 flex flex-col lg:flex-row items-center lg:items-center justify-center min-h-screen gap-12 lg:gap-24">
        <TimelineNodes
          milestones={milestones}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        <div className="w-full lg:w-3/4 animate-in fade-in zoom-in-95 duration-500">
          <MilestoneCard milestone={milestones[activeIndex]} />
        </div>
      </div>
    </SceneLayout>
  );
};
