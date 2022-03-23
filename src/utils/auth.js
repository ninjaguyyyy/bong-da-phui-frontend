import { getAccessToken } from "./token";

export const isLogin = () => {
  return !!getAccessToken();
};
