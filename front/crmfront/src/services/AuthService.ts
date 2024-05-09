import axios from 'axios';
import { Login, RegisterAuth } from '../types/AuthTypes.ts';
import { API_URL } from '../utils/consts.ts';

const AuthService = {

  registerUser: async (registerModel: RegisterAuth): Promise<string> => {
    console.log('TEST', registerModel);
    return axios({
      method: 'POST',
      url: `${API_URL}/user/register`,
      data: registerModel,
      headers: {
        'Content-Type': 'application/json', // Dodanie nagłówka Content-Type
      },
    });
  },

  loginUser: async (loginModel: FormData): Promise<string> => {
    console.log('jdsj');
    return axios.post('http://localhost:8080/login', loginModel);
    // return axios({
    //   method: 'POST',
    //   url: 'http://localhost:8080/login',
    //   data: loginModel,
    //   headers: {
    //     'Content-Type': 'application/json', // Dodanie nagłówka Content-Type
    //   },
    // });
  },
};

export default AuthService;
