import { SelectValue } from '../types/UtilTypes.ts';
import { SupportRequest } from '../types/SupportRequest.ts';
import { RoleType } from '../types/UserType.ts';
import { TaskPriority, TaskStatus, TaskType } from '../types/TaskType.ts';

export const API_URL = 'http://localhost:8080/api/v1';

export const TASK_STATUS_OPTIONS: SelectValue[] = [
  {
    text: 'W trakcie',
    value: TaskStatus.IN_PROGRESS,
  },
  {
    text: 'Oczekujące',
    value: TaskStatus.PENDING,
  },
  {
    text: 'Wykonane',
    value: TaskStatus.DONE,
  },
  {
    text: 'Anulowane',
    value: TaskStatus.CANCELED,
  },
];

export const TASK_PRIORITY_OPTIONS: SelectValue[] = [
  {
    text: 'Niski',
    value: TaskPriority.MINOR,
  },
  {
    text: 'Poważny',
    value: TaskPriority.MAJOR,
  },
  {
    text: 'Krytyczny',
    value: TaskPriority.CRITICAL,
  },
];

export const USER_ROLES_OPTIONS: SelectValue[] = [
  {
    text: 'Wszystko',
    value: 'ALL',
  },
  {
    text: 'KLIENT',
    value: RoleType.CLIENT,
  },
  {
    text: 'PRACOWNIK',
    value: RoleType.WORKER,
  },
  {
    text: 'ADMIN',
    value: RoleType.ADMIN,
  },
];

export const TASK_TYPE_OPTIONS: SelectValue[] = [
  {
    text: 'Logistyczny',
    value: TaskType.LOGISTIC,
  },
  {
    text: 'Zakupowy',
    value: TaskType.PURCHASE,
  },
  {
    text: 'Informatyczny',
    value: TaskType.INFORMATIC,
  },
];

export const GENDER_SELECT_OPTIONS: SelectValue[] = [
  {
    text: 'Mężczyzna',
    value: 'MAN',
  },
  {
    text: 'Kobieta',
    value: 'WOMAN',
  },
];

export const SUPPORT_REQUEST_SELECT_OPTIONS: SelectValue[] = [
  {
    text: SupportRequest.SUPPORT,
    value: 'support',
  },
  {
    text: SupportRequest.BUG,
    value: 'bug',
  },
  {
    text: SupportRequest.OTHER,
    value: 'other',
  },
  {
    text: SupportRequest.IMPROVEMENT,
    value: 'other',
  },
];

export type AllSelectValue = {
  initialStasuses: SelectValue[],
  taskPriority: SelectValue[],
  taskType: SelectValue[],
};

export const PROVINCES_VALUES: SelectValue[] = [
  { text: 'Dolnośląskie', value: 'Dolnośląskie' },
  { text: 'Kujawsko-Pomorskie', value: 'Kujawsko-Pomorskie' },
  { text: 'Lubelskie', value: 'Lubelskie' },
  { text: 'Lubuskie', value: 'Lubuskie' },
  { text: 'Łódzkie', value: 'Łódzkie' },
  { text: 'Małopolskie', value: 'Małopolskie' },
  { text: 'Mazowieckie', value: 'Mazowieckie' },
  { text: 'Opolskie', value: 'Opolskie' },
  { text: 'Podkarpackie', value: 'Podkarpackie' },
  { text: 'Podlaskie', value: 'Podlaskie' },
  { text: 'Pomorskie', value: 'Pomorskie' },
  { text: 'Śląskie', value: 'Śląskie' },
  { text: 'Świętokrzyskie', value: 'Świętokrzyskie' },
  { text: 'Warmińsko-Mazurskie', value: 'Warmińsko-Mazurskie' },
  { text: 'Wielkopolskie', value: 'Wielkopolskie' },
  { text: 'Zachodniopomorskie', value: 'Zachodniopomorskie' },
];
