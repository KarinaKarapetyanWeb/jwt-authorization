import { apiSlice } from "../../../shared";
import { IAuthResponse } from "../types/auth-response";
import { ICredentials } from "../types/credentials";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, ICredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation<IAuthResponse, void>({
      query: (credentials) => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    registration: builder.mutation<IAuthResponse, ICredentials>({
      query: (credentials) => ({
        url: "/registration",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation } =
  authApiSlice;
