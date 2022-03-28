import axiosClient from './axios-client';

export const conversationsService = {
  getByMembers: (members) => {
    const url = '/api/conversations/by-members';
    return axiosClient.get(url, { params: { members } });
  },

  create: (members) => {
    const url = '/api/conversations';
    return axiosClient.post(url, { members });
  },
};
