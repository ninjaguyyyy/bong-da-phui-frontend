import axiosClient from './axios-client';

export const messagesService = {
  getByConversation(id) {
    const url = '/api/messages/by-conversation/' + id;
    return axiosClient.get(url);
  },

  create(conversation, sender, text) {
    const url = '/api/messages/';
    return axiosClient.post(url, { conversation, sender, text });
  },
};
