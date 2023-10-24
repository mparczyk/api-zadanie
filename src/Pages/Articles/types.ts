export interface IArticle {
  id: number;
  article: string;
  description: string;
}

export type ArticleUpdateProps = IArticle;

export type ArticleCreateProps = Omit<IArticle, 'id'>;
