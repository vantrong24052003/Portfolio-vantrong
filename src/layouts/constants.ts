export interface Scene {
  id: number;
  label: string;
  shortLabel: string;
}

export const scenes: Scene[] = [
  { id: 0, label: 'OVERVIEW', shortLabel: 'PROFILE' },
  { id: 1, label: 'JOURNEY', shortLabel: 'JOURNEY' },
  { id: 2, label: 'SHOWCASE', shortLabel: 'PROJECTS' },
  { id: 3, label: 'CONNECTION', shortLabel: 'CONTACT' },
];
