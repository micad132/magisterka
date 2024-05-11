import axios from 'axios';
import { API_URL } from '../utils/consts.ts';

const UserService = {
  getUserDetails: async () => {
    const res = await axios.get(`${API_URL}/user/getLoggedUser`);
    return res.data;
  },

  getAllUsers: async () => {
    const res = await axios.get(`${API_URL}/user/users`);
    return res.data;
  },

  deleteUser: async (userId: number) => {
    try {
      const res = await axios.delete(`${API_URL}/user/${userId}`);
      return res.data;
    } catch (e) {
      throw e;
    }
  },
};

export default UserService;
