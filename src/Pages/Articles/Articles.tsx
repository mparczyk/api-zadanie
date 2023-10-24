import { Link } from 'react-router-dom';
import { List, Card, Button } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import type { IArticle } from './types';

import { useAllArticlesQuery, useArticleDeleteMutation } from './queries';

import { ContentWrapper, ButtonWrapper } from './styles';

export const ArticlesSite = (): JSX.Element => {
  const { data: articles } = useAllArticlesQuery();
  const { mutate: deleteArticle } = useArticleDeleteMutation();

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
                  <ButtonWrapper>
                    <Link to={`/article/${article.id}`}>
                      <Button icon={<FormOutlined />} />
                    </Link>
                    <Button danger icon={<DeleteOutlined />} onClick={() => deleteArticle(article.id)} />
                  </ButtonWrapper>
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
