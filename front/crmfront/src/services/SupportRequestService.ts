import axios from 'axios';
import { API_URL } from '../utils/consts.ts';
import { AddingSupport } from '../types/SupportRequest.ts';

const SupportRequestService = {
  getSupportRequests: async () => {
    const res = await axios.get(`${API_URL}/support`);
    return res.data;
  },

  deleteSupportRequest: async (supportId: number) => {
    try {
      const res = await axios.delete(`${API_URL}/support/${supportId}`);
      return res.data;
    } catch (e) {
      throw e;
    }
  },

  addSupportRequest: async (supportRequest: AddingSupport): Promise<string> => axios({
    method: 'POST',
    url: `${API_URL}/support`,
    data: supportRequest,
    headers: {
      'Content-Type': 'application/json', // Dodanie nagłówka Content-Type
    },
  }),
};

export default SupportRequestService;
