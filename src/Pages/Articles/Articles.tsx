import { Link } from "react-router-dom";
import { Button } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";

import type { IArticle } from "./types";

import { useAllArticlesQuery, useArticleDeleteMutation } from "./queries";

import {
  ButtonWrapper,
  Title,
  StyledList,
  StyledCollapse,
  ContentWrapper,
  StyledArrowIcon,
} from "./styles";

export const ArticlesSite = (): JSX.Element => {
  const { data: articles } = useAllArticlesQuery();
  const { mutate: deleteArticle } = useArticleDeleteMutation();

  return (
    <>
      <Title>Articles</Title>
      <StyledList
        dataSource={articles ?? []}
        renderItem={(article: IArticle) => (
          <StyledCollapse
            collapsible="icon"
            expandIcon={({ isActive }) => (
              <StyledArrowIcon rotate={isActive ? 180 : 0} />
            )}
            items={[
              {
                label: (
                  <ContentWrapper>
                    <h3>{article.article}</h3>
                    <ButtonWrapper>
                      <Link to={`/article/${article.id}`}>
                        <Button type="text" icon={<FormOutlined />} />
                      </Link>
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => deleteArticle}
                      />
                    </ButtonWrapper>
                  </ContentWrapper>
                ),
                children: <p>{article.description}</p>,
              },
            ]}
          />
        )}
      />
    </>
  );
};
