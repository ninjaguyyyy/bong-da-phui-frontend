import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services";

export const LoginMethods = {
  Username: "username",
  Facebook: "facebook",
  Google: "google",
};

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async ({ method, tokenId, userID, accessToken }) => {
    let result;

    if (method === LoginMethods.Facebook) {
      result = await authService.loginWithFacebook(userID, accessToken);
    }

    if (method === LoginMethods.Google) {
      result = await authService.loginWithGoogle(tokenId);
    }

    return result;
  }
);
