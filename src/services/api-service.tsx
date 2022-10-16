import axios from 'axios';
//import dotenv from 'dotenv';
import {IRegistration} from '../screens/Register';
//dotenv.config();
import CookieManager from '@react-native-cookies/cookies';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/', //TODO Deshardcodear
  withCredentials: true,
});

export const api = {
  adminSignup: async (data: IRegistration) => {
    return await axiosInstance
      .post('/users', {...data, role: 1})
      .then(async (response) => {
        const cookie: string = response.headers['set-cookie']
          ? response.headers['set-cookie'].toString()
          : '';
        await CookieManager.setFromResponse('http://localhost:3001/', cookie);
        return response;
      });
  },
};
