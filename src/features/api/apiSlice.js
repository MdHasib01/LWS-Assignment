import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-josn-server-1.herokuapp.com/api",
  }),
  tagTypes: ["Todos", "Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (filters) => {
        const { status, colors } = filters;
        // Status Query
        let statusQuery = "";
        if (status !== "all") {
          statusQuery = `&completed=${status}`;
        }

        // colors query
        let colorsQuery = "";
        if (colors.length > 0) {
          colorsQuery = colors.map((item) => `color=${item}`).join("&");
        }

        return `/todos?${colorsQuery}${statusQuery}`;
      },
      keepUnusedDataFor: 600,
      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation({
      query: (data) => ({
        url: "/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
    editTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Todos",
        { type: "todo", id: arg.id },
      ],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
