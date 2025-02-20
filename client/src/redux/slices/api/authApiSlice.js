import { apiSlice } from "../apiSlice"

const user = "/user"

export const authApislice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        login: builder.mutation({
            query: (data)=>({
                url: `${import.meta.env.VITE_APP_BASE_URL}/login`,
                method: "POST",
                body: data,
                credentials: "include",
            })
        }),
    }),
});

export const { useLoginMutation } = authApislice;
export default authApislice;