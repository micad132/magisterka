import { RoleTypeType } from './UserType.ts';
import { ValuesType } from './UtilTypes.ts';

export const StatCategory = {
  MESSAGE: 'MESSAGE',
  PEOPLE: 'PEOPLE',
  SUPPORT: 'SUPPORT',
  TASK: 'TASK',
} as const;

export const StatType = {
  PIE: 'PIE',
  DOUGHNUT: 'DOUGHNUT',
  LINE: 'LINE',
  BAR: 'BAR',
};

export type StatCategoryType = ValuesType<typeof StatCategory>;
export type StatTypeType = ValuesType<typeof StatType>;

export type StatResponse = {
  id: number,
  chartData: string,
  createdTime: string,
  creatorUsername: string,
  userRole: RoleTypeType,
  statCategory: StatCategoryType,
  statType: StatTypeType,
  description: string,
};

export type AddStat = {
  chartData: string,
  creatorId: number,
  statCategory: StatCategoryType,
  statType: StatTypeType,
  description: string,
};

export type Dataset = {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
};

export type ChartDataObject = {
  labels: string[];
  datasets: Dataset[];
};
