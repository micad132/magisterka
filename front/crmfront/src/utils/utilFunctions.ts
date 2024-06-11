import DOMPurify from 'dompurify';
import { Survey, SurveyStatistics } from '../types/SurveyType.ts';
import { MessageType } from '../types/MessageType.ts';

export const sanitizeInput = (input: string): string => DOMPurify.sanitize(input, { USE_PROFILES: { html: false } });

export const calculateSurveyStatistics = (surveys: Survey[]): SurveyStatistics => {
  let lowRate = 0;
  let mediumRate = 0;
  let highRate = 0;

  surveys.forEach((survey) => {
    const averageRate = parseFloat(((survey.taskRate + survey.messageRate + survey.supportRate) / 3).toFixed(1));

    if (averageRate < 2.0) {
      lowRate++;
    } else if (averageRate >= 2.0 && averageRate < 4.0) {
      mediumRate++;
    } else if (averageRate >= 4.0) {
      highRate++;
    }
  });

  return { lowRate, mediumRate, highRate };
};

export const getStartAndEndOfWeek = (date: Date): { startOfWeek: Date, endOfWeek: Date } => {
  const startOfWeek = new Date(date);
  const day = date.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  startOfWeek.setDate(date.getDate() + diffToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return { startOfWeek, endOfWeek };
};

export const filterSurveysByCurrentWeek = (surveys: Survey[]): number => {
  const now = new Date();
  const { startOfWeek, endOfWeek } = getStartAndEndOfWeek(now);

  const surveysThisWeek = surveys.filter((survey) => {
    const createdDate = new Date(survey.createdTime);
    return createdDate >= startOfWeek && createdDate <= endOfWeek;
  });

  return surveysThisWeek.length;
};

export const filterMessagesByCurrentWeek = (messages: MessageType[]): number => {
  const now = new Date();
  const { startOfWeek, endOfWeek } = getStartAndEndOfWeek(now);

  const surveysThisWeek = messages.filter((message) => {
    const createdDate = new Date(message.date);
    return createdDate >= startOfWeek && createdDate <= endOfWeek;
  });

  return surveysThisWeek.length;
};
