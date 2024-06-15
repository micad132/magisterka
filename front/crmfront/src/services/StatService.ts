import axios from 'axios';
import { API_URL } from '../utils/consts.ts';
import { AddStat } from '../types/StatType.ts';

const StatService = {

  getAllStats: async () => {
    try {
      const data = await axios.get(`${API_URL}/stat`);
      return data.data;
    } catch (e) {
      throw e;
    }
  },

  addStat: async (statBody: AddStat) => {
    try {
      await axios.post(`${API_URL}/stat`, statBody);
    } catch (e) {
      throw e;
    }
  },

  deleteStat: async (id: number) => {
    try {
      await axios.delete(`${API_URL}/stat/${id}`);
    } catch (e) {
      throw e;
    }
  },
};

export default StatService;
