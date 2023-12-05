import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { ICar } from "./favorite/favoriteSlice";

interface IQuery {
  page: number;
  make: string | null;
  language: string | undefined;
}

interface IError {
  status?: number;
  data?: any;
}

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    IError
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://654e0fd4cbc3253557424cbf.mockapi.io",
  }),
  endpoints: builder => ({
    getAllCars: builder.query<ICar[], IQuery>({
      query: ({ page = 1, make, language }) => ({
        url: `/adverts${language === "uk" ? "-uk" : ""}`,
        method: "get",
        params: { page, make, limit: 12 },
      }),
    }),
  }),
});

export const { useLazyGetAllCarsQuery } = api;
