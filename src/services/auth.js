import axiosClient from "./axios-client";

export const authService = {
  loginWithGoogle: (idToken) => {
    const url = "/api/auth/login/with-google";
    return axiosClient.post(url, { idToken });
  },
};
