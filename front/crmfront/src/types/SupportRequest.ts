import { ValuesType } from './UtilTypes.ts';

export const SupportRequest = {
  IMPROVEMENT: 'improvement',
  BUG: 'bug',
  SUPPORT: 'support',
  OTHER: 'other',
} as const;

export type SupportRequestType = ValuesType<typeof SupportRequest>;
