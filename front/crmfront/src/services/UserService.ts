import axios from 'axios';
import { API_URL } from '../utils/consts.ts';

const UserService = {
  getUserDetails: async () => {
    const res = await axios.get(`${API_URL}/user/getLoggedUser`);
    console.log('RES', res);
    return res.data;
  },
};

export default UserService;
