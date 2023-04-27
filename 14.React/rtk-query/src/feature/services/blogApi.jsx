// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3000`}),

    tagTypes: ["blogApi"],
    endpoints: (builder) => ({

        getBlogs: builder.query({
            query: () => "/blogs",
            providesTags: ["blogApi"],
        }),

        getSingleBlog: builder.query({
            query: (id) => `/blogs/${id}`,
            providesTags: ["blogApi"],
        }),

        getCreateBlog: builder.mutation({
            query: (blog) => ({
                url: "/blogs",
                method: "POST",
                body: blog,
            }),
            invalidatesTags: ["blogApi"]
        }),

        getDeleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["blogApi"]
        })
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetBlogsQuery, useGetSingleBlogQuery, useGetCreateBlogMutation, useGetDeleteBlogMutation} = blogApi