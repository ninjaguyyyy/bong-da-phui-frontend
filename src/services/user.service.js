import axiosClient from './axios-client';

export const usersService = {
  getAll: () => {
    const url = '/api/users';
    return axiosClient.get(url);
  },
};
