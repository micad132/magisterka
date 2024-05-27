import axios from 'axios';
import { Login, RegisterAuth, RegisterAuthResponse } from '../types/AuthTypes.ts';
import { API_URL } from '../utils/consts.ts';

const AuthService = {

  registerUser: async (registerModel: RegisterAuth): Promise<RegisterAuthResponse> => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:8080/auth/register',
        data: registerModel,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  loginUser: async (loginModel: FormData): Promise<string> => axios.post('http://localhost:8080/login', loginModel)
  // return axios({
  //   method: 'POST',
  //   url: 'http://localhost:8080/login',
  //   data: loginModel,
  //   headers: {
  //     'Content-Type': 'application/json', // Dodanie nagłówka Content-Type
  //   },
  // });
  ,
};

export default AuthService;
