/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

import {
  ICreateUserDTO,
  IUserAuthDTO,
  IUserAuthResponse,
  IGetUserResponse,
  IDeleteUserDTO,
} from '@interfaces/index';

const BASE_URL = 'http://localhost:3333';

const a = '';

export default class ChatAPI {
  static createUser(data: ICreateUserDTO) {
    return axios(`${BASE_URL}/register`, {
      method: 'POST',
      data,
    });
  }

  static userAuth(data: IUserAuthDTO) {
    return axios.post<IUserAuthResponse>(`${BASE_URL}/auth`, {
      data,
    });
  }

  static getUser(token: string) {
    return axios.get<IGetUserResponse>(`${BASE_URL}/me`, {
      headers: {
        authorization: token,
      },
    });
  }

  static deleteUser(data: IDeleteUserDTO) {
    return axios.delete(`${BASE_URL}/delete`, {
      data,
    });
  }
}
