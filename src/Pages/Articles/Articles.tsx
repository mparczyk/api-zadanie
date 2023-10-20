import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { List, Card } from 'antd';

import type { IArticle } from './types';

import { request } from '../../utils/http';

import { ContentWrapper, StyledEditIcon } from './styles';

export const ArticlesSite = (): JSX.Element => {
  const { data } = useQuery({
    queryKey: ['articles'],
    queryFn: () => request<IArticle[]>('get', 'http://localhost:3001/articles'),
  });

  return (
    <>
      <h2>Articles</h2>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data ?? []}
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
