import { List } from "antd";

import type { IArticle } from "./types";

import { useAllArticlesQuery } from "./queries";

import { CollapseLabel } from "./CollapseLabel";
import { Title, StyledCollapse, StyledArrowIcon } from "./styles";

export const ArticlesSite = (): JSX.Element => {
  const { data: articles } = useAllArticlesQuery();

  return (
    <>
      <Title>Articles</Title>
      <List
        dataSource={articles ?? []}
        renderItem={(article: IArticle) => (
          <StyledCollapse
            collapsible="icon"
            expandIcon={({ isActive }) => (
              <StyledArrowIcon tabIndex={0} rotate={isActive ? 180 : 0} />
            )}
            items={[
              {
                label: <CollapseLabel {...article} />,
                children: <p>{article.description}</p>,
              },
            ]}
          />
        )}
      />
    </>
  );
};
