import { useLoaderData, useParams } from "react-router";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

import type { LoaderFunctionArgs } from "react-router-dom";
import type { IArticle, ArticleCreateProps, ArticleUpdateProps } from "./types";

import { request } from "../../utils/http";

export const useAllArticlesQuery = () =>
  useQuery({
    queryKey: ["articles"],
    queryFn: () => request<IArticle[]>("get", "http://localhost:3001/articles"),
  });

const articleDetailQuery = (id: number) => ({
  queryKey: ["articles", id],
  queryFn: () =>
    request<IArticle>("get", `http://localhost:3001/articles/${id}`),
});

export const articleLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const paramsNumber = Number.parseInt(params.id!);
    const query = articleDetailQuery(paramsNumber);

    return await queryClient.ensureQueryData(query);
  };

type ArticleLoaderType = Awaited<ReturnType<ReturnType<typeof articleLoader>>>;

export const useArticleQuery = () => {
  const initialData = useLoaderData() as ArticleLoaderType;
  const params = useParams();
  const paramsNumber = Number.parseInt(params.id!);

  return useQuery({
    ...articleDetailQuery(paramsNumber),
    initialData,
  });
};

export const useArticleEditMutation = () =>
  useMutation({
    mutationFn: (data: ArticleUpdateProps) =>
      request<IArticle>(
        "put",
        `http://localhost:3001/articles/${data.id}`,
        data
      ),
  });

export const useArticleDeleteMutation = () =>
  useMutation({
    mutationFn: (id: number) =>
      request<IArticle>("delete", `http://localhost:3001/articles/${id}`),
  });

export const useNewArticleMutation = () =>
  useMutation({
    mutationFn: (data: ArticleCreateProps) =>
      request<IArticle>("post", "http://localhost:3001/articles", data),
  });
