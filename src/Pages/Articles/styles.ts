import styled from "styled-components";
import { Collapse, Form } from "antd";
import { DownOutlined, FormOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const StyledArrowIcon = styled(DownOutlined)`
  height: 32px;
  width: 32px;
  padding-left: 4px;
`;
export const StyledEditIcon = styled(FormOutlined)`
  width: 100%;
  height: 100%;
  color: rgba(1, 1, 1, 0.7);
`;
export const StyledLink = styled(Link)`
  display: flex;
  height: 32px;
  width: 32px;
  &:focus {
    border: 4px solid rgba(97, 186, 250, 0.7);
    border-radius: 8px;
  }
  .anticon-form {
    display: flex;
    justify-content: center;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px 0px 12px;
  height: 100%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  height: 100%;
`;
export const StyledForm = styled(Form)`
  max-width: 600px;
`;
export const Title = styled.h1`
  color: #001529;
`;

export const StyledCollapse = styled(Collapse)`
  margin-bottom: 8px;
  display: flex;
  width: 100%;

  .ant-collapse-item {
    background-color: rgb(249, 249, 249);
    width: 100%;
  }
  .ant-collapse-content-box {
    background-color: rgb(40, 56, 86);
    color: white;
    border-radius: 0px 0px 8px 8px;
  }
  .ant-collapse-expand-icon {
    :focus {
      border: 4px solid rgba(97, 186, 250, 0.7);
      border-radius: 8px;
    }
  }
`;
