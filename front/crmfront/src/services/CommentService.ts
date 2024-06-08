import axios from 'axios';
import { API_URL } from '../utils/consts.ts';
import { AddingComment } from '../types/CommentType.ts';

const CommentService = {
  getAllComments: async () => {
    try {
      const data = await axios.get(`${API_URL}/comment`);
      return data.data;
    } catch (e) {
      throw e;
    }
  },

  addComment: async (commentBody: AddingComment) => {
    try {
      await axios.post(`${API_URL}/comment`, commentBody);
    } catch (e) {
      throw e;
    }
  },
  deleteComment: async (commentId: number) => {
    try {
      await axios.delete(`${API_URL}/comment/${commentId}`);
    } catch (e) {
      throw e;
    }
  },
};

export default CommentService;
