import { useTranslation } from 'react-i18next';
import type { Project } from '@/shared/types';

const PROJECT_KEYS = ['nekoCinema', 'shopeeClone', 'twitterApi'] as const;
const PROJECT_IMAGES = [
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800&auto=format&fit=crop',
];

export const useProjects = (): Project[] => {
  const { t } = useTranslation();

  return PROJECT_KEYS.map((key, index) => ({
    title: t(`showcase.projects.${key}.title`),
    category: t(`showcase.projects.${key}.category`),
    systemId: t(`showcase.projects.${key}.systemId`),
    description: t(`showcase.projects.${key}.description`),
    stack: t(`showcase.projects.${key}.stack`, { returnObjects: true }) as string[],
    image: PROJECT_IMAGES[index],
  }));
};
