import type { ReactNode } from 'react';

export const SyntaxType = {
  Keyword: 'keyword',
  Class: 'class',
  Function: 'function',
  String: 'string',
  Symbol: 'symbol',
  Comment: 'comment',
  Number: 'number',
} as const;

export type SyntaxType = typeof SyntaxType[keyof typeof SyntaxType];

export interface SyntaxProps {
  children: ReactNode;
  type: SyntaxType;
}
