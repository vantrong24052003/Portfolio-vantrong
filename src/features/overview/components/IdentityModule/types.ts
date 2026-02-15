import type { ElementType } from 'react';

export interface TechBadgeProps {
  icon: ElementType;
  label: string;
  colorClass?: string;
  borderOnly?: boolean;
}

export interface SocialLinkProps {
  icon: ElementType;
  label: string;
  href?: string;
}
