import { apiSlice } from "../../../shared";
import { IUser } from "../../../shared";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.mutation<IUser[], void>({
      query: () => ({ url: "/users", method: "GET" }),
    }),
  }),
});

export const { useGetUsersMutation } = usersApiSlice;
