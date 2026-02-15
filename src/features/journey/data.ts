import { useTranslation } from 'react-i18next';
import type { Milestone } from '@/shared/types';

const MILESTONE_KEYS = ['education', 'intern', 'current'] as const;

export const useMilestones = (): Milestone[] => {
  const { t } = useTranslation();

  return MILESTONE_KEYS.map((key) => ({
    year: t(`journey.milestones.${key}.year`),
    shortTitle: t(`journey.milestones.${key}.shortTitle`),
    subLabel: t(`journey.milestones.${key}.subLabel`),
    period: t(`journey.milestones.${key}.period`),
    organization: t(`journey.milestones.${key}.organization`),
    role: t(`journey.milestones.${key}.role`),
    description: t(`journey.milestones.${key}.description`),
    stack: t(`journey.milestones.${key}.stack`, { returnObjects: true }) as string[],
    achievement: t(`journey.milestones.${key}.achievement`),
    location: key === 'current' ? t(`journey.milestones.${key}.location`) : undefined,
  }));
};
