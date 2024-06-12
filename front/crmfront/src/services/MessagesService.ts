import axios from 'axios';
import { API_URL } from '../utils/consts.ts';
import { AddingMessage } from '../types/MessageType.ts';

const MessagesService = {

  addMessage: async (messageBody: AddingMessage): Promise<string> => axios({
    method: 'POST',
    url: `${API_URL}/message`,
    data: messageBody,
    headers: {
      'Content-Type': 'application/json', // Dodanie nagłówka Content-Type
    },
  }),

  getAllMessages: async () => {
    try {
      const data = await axios.get(`${API_URL}/message`);
      return data.data;
    } catch (e) {
      throw e;
    }
  },
  deleteMessage: async (messageId: number) => {
    try {
      await axios.delete(`${API_URL}/message/${messageId}`);
    } catch (e) {
      throw e;
    }
  },

};

export default MessagesService;
