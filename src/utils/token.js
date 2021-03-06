const KEY = "access-token";

export const setAccessToken = (accessToken) => {
  localStorage.setItem(KEY, accessToken);
};

export const getAccessToken = () => {
  return localStorage.getItem(KEY);
};

export const removeAccessToken = () => {
  localStorage.removeItem(KEY);
};
