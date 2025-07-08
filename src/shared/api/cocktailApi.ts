import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getCocktailByName: builder.query({
      query: (name: string) => `search.php?s=${name}`,
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error("Error fetching cocktail by name:", error);
        }
      },
    }),
  }),
});

export const { useGetCocktailByNameQuery } = cocktailApi;
