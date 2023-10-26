import styled from 'styled-components';
import { Collapse, Form, List } from 'antd';

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

export const StyledList = styled(List).attrs(props => ({
  className: props.className,
}))`
  // .ant-collapse-item {
  //   background-color: rgb(249, 249, 249);
  // }
  // .ant-collapse-header-text {
  //   color: yellow;
  // }
`;

export const StyledCollapse = styled(Collapse).attrs(props => ({
  className: props.className,
}))`
  .ant-collapse-item {
    background-color: rgb(249, 249, 249);
  }
  .ant-collapse-header-text {
    color: yellow;
  }
`;
