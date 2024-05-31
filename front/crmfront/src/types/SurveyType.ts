export type AddSurveyState = {
  taskRate: string,
  messageRate: string,
  supportRate: string,
};

export type AddSurvey = {
  taskRate: number,
  messageRate: number,
  supportRate: number,
  creatorId: number,
};

export type SurveyErrors = {
  taskRate: string,
  messageRate: string,
  supportRate: string,
};

export const ADD_SURVEY_STATE_INITIAL_VALUES: AddSurveyState = {
  taskRate: '',
  messageRate: '',
  supportRate: '',
};

export const SURVEY_ERRORS_INITIAL_VALUES: SurveyErrors = {
  taskRate: '',
  messageRate: '',
  supportRate: '',
};
