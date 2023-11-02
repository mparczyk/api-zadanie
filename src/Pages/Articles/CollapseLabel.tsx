import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import type { IArticle } from "./types";

import { useArticleDeleteMutation } from "./queries";

import {
  ButtonWrapper,
  ContentWrapper,
  StyledEditIcon,
  StyledLink,
} from "./styles";

export const CollapseLabel = ({ article, id }: IArticle): JSX.Element => {
  const { mutate: deleteArticle } = useArticleDeleteMutation();

  return (
    <ContentWrapper>
      <h3>{article}</h3>
      <ButtonWrapper>
        <StyledLink to={`/article/${id}`}>
          <StyledEditIcon />
        </StyledLink>
        <Button
          aria-label="Delete Article"
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => deleteArticle}
        />
      </ButtonWrapper>
    </ContentWrapper>
  );
};
