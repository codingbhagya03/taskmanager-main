import { apiSlice } from "../apiSlice"

const user = "/user"
const AUTH_URL = import.meta.env.VITE_APP_BASE_URL; 
export const authApislice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                body: data,
                credentials: "include",
            })
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/register`,
                method: "POST",
                body: data,
                credentials: "include",
            })
        }),

        logout: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/logout`,
                method: "POST",
                credentials: "include",
            })
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApislice;
export default authApislice;