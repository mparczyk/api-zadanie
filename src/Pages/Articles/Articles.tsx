import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Card } from 'antd';

import type { IArticle } from './types';

import { request } from '../../utils/http';

import { ContentWrapper, StyledEditIcon } from './styles';

export const useFetchArticlesData = (): { articles: IArticle[] | null } => {
  const [articles, setArticles] = useState<IArticle[] | null>(null);
  useEffect(() => {
    const fetchArticlesData = async () => {
      const response = await request<IArticle[]>('get', 'http://localhost:3001/articles');
      setArticles(response);
    };
    fetchArticlesData();
  }, []);
  return { articles };
};

export const ArticlesSite = (): JSX.Element => {
  const { articles } = useFetchArticlesData();

  return (
    <>
      <h2>Articles</h2>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={articles ?? []}
        renderItem={(article: IArticle) => (
          <List.Item>
            <Card
              title={
                <ContentWrapper>
                  <p>{article.article}</p>
                  <Link to={`/article/${article.id}`}>
                    <StyledEditIcon />
                  </Link>
                </ContentWrapper>
              }
            >
              <p>{article.description}</p>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};
