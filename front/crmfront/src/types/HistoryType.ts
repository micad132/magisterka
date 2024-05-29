import { ValuesType } from './UtilTypes.ts';

export const ActionType = {
  TASK: 'TASK',
  COMMENT: 'COMMENT',
  SUPPORT: 'SUPPORT',
  PROFILE: 'PROFILE',
  SURVEY: 'SURVEY',
  MESSAGE: 'MESSAGE',
} as const;

export type ActionTypeType = ValuesType<typeof ActionType>;

export type HistoryType = {
  id: number,
  performerUsername: string,
  createdTime: string,
  historyActionType: ActionTypeType,
  description: string,
};

export type AddHistory = {
  description: string,
  historyActionType: ActionTypeType,
  performerId: number,
};
