export interface Scene {
  id: number;
  label: string;
  shortLabel: string;
  translationKey: string;
}

export const scenes: Scene[] = [
  { id: 0, label: 'OVERVIEW', shortLabel: 'PROFILE', translationKey: 'overview' },
  { id: 1, label: 'JOURNEY', shortLabel: 'JOURNEY', translationKey: 'journey' },
  { id: 2, label: 'SHOWCASE', shortLabel: 'PROJECTS', translationKey: 'showcase' },
  { id: 3, label: 'CONNECTION', shortLabel: 'CONTACT', translationKey: 'connection' },
];
