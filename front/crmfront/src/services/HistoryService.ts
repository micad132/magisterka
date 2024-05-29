import axios from 'axios';
import { API_URL } from '../utils/consts.ts';
import { AddHistory } from '../types/HistoryType.ts';

const HistoryService = {
  getAllHistories: async () => {
    try {
      const data = await axios.get(`${API_URL}/history`);
      return data;
    } catch (e) {
      throw e;
    }
  },

  addHistory: async (historyBody: AddHistory) => {
    try {
      await axios.post(`${API_URL}/history`, historyBody);
    } catch (e) {
      throw e;
    }
  },

};

export default HistoryService;
