export type AddSurveyState = {
  taskRate: number,
  messageRate: number,
  supportRate: number,
};

export type Survey = {
  id: number,
  taskRate: number,
  messageRate: number,
  supportRate: number,
  createdTime: string,
  authorName: string,
  authorSurname: string,
  authorUsername: string,
};

export type AddSurvey = {
  taskRate: number,
  messageRate: number,
  supportRate: number,
  authorId: number,
};

export type SurveyErrors = {
  taskRate: string,
  messageRate: string,
  supportRate: string,
};

export const ADD_SURVEY_STATE_INITIAL_VALUES: AddSurveyState = {
  taskRate: 0.1,
  messageRate: 0.1,
  supportRate: 0.1,
};

export const SURVEY_ERRORS_INITIAL_VALUES: SurveyErrors = {
  taskRate: '',
  messageRate: '',
  supportRate: '',
};

export const SURVEY_INITIAL_VALUES: Survey = {
  taskRate: 0,
  createdTime: '',
  id: 0,
  messageRate: 0,
  supportRate: 0,
  authorName: '',
  authorSurname: '',
  authorUsername: '',
};
