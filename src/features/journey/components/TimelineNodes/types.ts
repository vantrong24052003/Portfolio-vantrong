import type { Milestone } from '@/shared/types';

export interface TimelineNodesProps {
  milestones: Milestone[];
  activeIndex: number;
  onSelect: (index: number) => void;
}
