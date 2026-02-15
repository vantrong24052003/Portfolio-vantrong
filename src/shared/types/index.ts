export interface Milestone {
  year: string;
  shortTitle: string;
  subLabel?: string;
  period: string;
  organization: string;
  role: string;
  description: string;
  stack: string[];
  achievement: string;
  location?: string;
}

export interface Project {
  title: string;
  category: string;
  systemId: string;
  description: string;
  stack: string[];
  image?: string;
  githubUrl?: string;
}
