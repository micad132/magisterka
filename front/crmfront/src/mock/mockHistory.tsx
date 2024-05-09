import { ActionType, HistoryType } from '../types/HistoryType.ts';

export const MOCKED_HISTORIES: HistoryType[] = [
  {
    id: '1',
    date: '04.03.2000',
    performer: 'mikad132',
    actionType: ActionType.COMMENT,
  },
  {
    id: '2',
    date: '04.03.2000',
    performer: 'peterczech',
    actionType: ActionType.TASK,
  },
  {
    id: '3',
    date: '04.03.2000',
    performer: 'adamul',
    actionType: ActionType.PROFILE,
  },
  {
    id: '4',
    date: '04.03.2000',
    performer: 'kimek132',
    actionType: ActionType.SUPPORT,
  },
];
