import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Card } from 'antd';
import styled from 'styled-components';

import type { IArticle } from './Types/types';

import { ReactComponent as EditIcon } from '../assets/icons/edit-button.svg';
import { request } from '../utils/http';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledEditIcon = styled(EditIcon)`
  width: 25px;
  height: 25px;
`;

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
