import { ValuesType } from './UtilTypes.ts';

export type Support = {
  id: number,
  description: string,
  dateTime: string,
  supportCategory: SupportRequestType,
  username: string,
};

export type AddingSupport = {
  description: string,
  supportCategory: SupportRequestType,
  userId: number,
};

export const SupportRequest = {
  IMPROVEMENT: 'IMPROVEMENT',
  BUG: 'BUG',
  SUPPORT: 'SUPPORT',
  OTHER: 'OTHER',
} as const;

export type SupportRequestType = ValuesType<typeof SupportRequest>;
