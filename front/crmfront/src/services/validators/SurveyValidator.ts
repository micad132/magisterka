import * as Yup from 'yup';

export type SurveyValidatorErrors = {
  [key: string]: string,
};

export const surveyScheme = Yup.object().shape({
  taskRate: Yup.number()
    .required('Task rate is required')
    .min(0.1, 'Task rate must be in range from 0.1 to 5.0')
    .max(5.0, 'Task rate must be in range from 0.1 to 5.0'),
  messageRate: Yup.number()
    .required('Message rate is required')
    .min(0.1, 'Message rate must be in range from 0.1 to 5.0')
    .max(5.0, 'Message rate must be in range from 0.1 to 5.0'),
  supportRate: Yup.number()
    .required('Support rate is required')
    .min(0.1, 'Support rate must be in range from 0.1 to 5.0')
    .max(5.0, 'Support rate must be in range from 0.1 to 5.0'),
});
