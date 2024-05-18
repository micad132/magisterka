import { ValuesType } from './UtilTypes.ts';

export type Support = {
  description: string,
  date: string,
  supportType: SupportRequestType,
  author: string,
};

export const SupportRequest = {
  IMPROVEMENT: 'improvement',
  BUG: 'bug',
  SUPPORT: 'support',
  OTHER: 'other',
} as const;

export type SupportRequestType = ValuesType<typeof SupportRequest>;
