import styled from "styled-components";
import { Collapse, Form, List } from "antd";
import { DownOutlined } from "@ant-design/icons";

export const StyledArrowIcon = styled(DownOutlined)`
  height: 24px;
  width: 24px;
  padding-top: 32px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
export const StyledForm = styled(Form)`
  max-width: 600px;
`;
export const Title = styled.h1`
  color: #001529;
`;

export const StyledList = styled(List).attrs((props) => ({
  className: props.className,
}))``;

export const StyledCollapse = styled(Collapse).attrs((props) => ({
  className: props.className,
}))`
  margin-bottom: 8px;
  display: flex;
  flex-grow: 1;
  width: 100%;

  &.ant-collapse-header {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .ant-collapse-item {
    background-color: rgb(249, 249, 249);
    width: 100%;
  }
  .ant-collapse-content-box {
    background-color: rgb(40, 56, 86);
    color: white;
    border-radius: 0px 0px 8px 8px;
  }
  . ant-collapse-icon {
    height: 100%;
  }
`;
