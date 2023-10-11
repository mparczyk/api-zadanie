import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { List, Card } from 'antd';

import { ReactComponent as Edit } from '../Pages/edit-button.svg';

interface IArticle {
    id: number;
    article: string;
    description: string;
  }

interface SuccessResponse<T> {
    data: T[];
    status: string;

}

export const useFetchArticlesData = (): { articles: IArticle[] | null } => {
  const [articles, setArticles] = useState<IArticle[] | null>(null);
  
  useEffect(() => {
    const fetchArticlesData = async () => {
      const response = await fetch("http://localhost:3001/articles");
      if (response.ok) {
        const data = await response.json() as SuccessResponse<IArticle>;
        setArticles(data.data);
      }
    }
    fetchArticlesData();
  }, []);
  return { articles };
}
  
export const ArticlesSite = (): JSX.Element => {
  const { articles } = useFetchArticlesData();
  
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={articles??[]}
      renderItem={(article: IArticle) => (
        <List.Item>
          <Card title={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p>{article.article}</p>
              <Link to={`/article/${article.id}`}><Edit style={{ width: 25, height: 25 }} /></Link>
            </div>
          }
          >
            <p>{article.description}</p>
          </Card>
        </List.Item>
      )}
    />
  )
}