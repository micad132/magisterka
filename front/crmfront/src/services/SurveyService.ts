import axios from 'axios';
import { API_URL } from '../utils/consts.ts';
import { AddSurvey } from '../types/SurveyType.ts';

const SurveyService = {

  fetchSurveys: async () => {
    try {
      const res = await axios.get(`${API_URL}/survey`);
      return res.data;
    } catch (e) {
      throw e;
    }
  },

  addSurvey: async (surveyBody: AddSurvey) => {
    try {
      await axios.post(`${API_URL}/survey`, surveyBody);
    } catch (e) {
      throw e;
    }
  },

  deleteSurvey: async (surveyId: number) => {
    try {
      await axios.delete(`${API_URL}/survey/${surveyId}`);
    } catch (e) {
      throw e;
    }
  },
};

export default SurveyService;
