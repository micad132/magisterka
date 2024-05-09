import { ValuesType } from './UtilTypes.ts';

export const ActionType = {
  TASK: 'Task',
  COMMENT: 'Comment',
  SUPPORT: 'Support',
  PROFILE: 'Profile',
} as const;

export type ActionTypeType = ValuesType<typeof ActionType>;

export type HistoryType = {
  id: string,
  performer: string,
  date: string,
  actionType: ActionTypeType,
};
