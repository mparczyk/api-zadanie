import { useLoaderData, useParams } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router-dom';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

import type { IArticle } from './types';

import { request } from '../../utils/http';

const articleDetailQuery = (id: number) => ({
  queryKey: ['articles', id],
  queryFn: async () => await request<IArticle>('get', `http://localhost:3001/articles/${id}`),
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
  const { data: article } = useQuery({
    ...articleDetailQuery(paramsNumber),
    initialData,
  });

  return article;
};

export const useArticleEditMutation = (article: IArticle) =>
  useMutation({
    mutationFn: (data: object) => request<IArticle>('put', `http://localhost:3001/articles/${article.id}`, data),
  });

export const useArticleDeleteMutation = (article: IArticle) =>
  useMutation({
    mutationFn: () => request('delete', `http://localhost:3001/articles/${article.id}`),
  });
