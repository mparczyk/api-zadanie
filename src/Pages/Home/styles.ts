import { Link } from "react-router-dom";
import styled from "styled-components";
import { Layout, Button, Menu } from "antd";

const { Header, Content } = Layout;

export const StyledLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 500;
`;
export const CustomHeader = styled(Header)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  min-height: 8vh;
  border-radius: 8px;
  padding: 8px;
  background-color: #001529;
`;
export const CustomContent = styled(Content)`
  text-align: center;
  margin: 0;
  padding: 8px;
  min-height: 100vh;
  background-color: #fff;
`;
export const CustomButton = styled(Button)`
  font-size: 16px;
  width: 64px;
  height: 64px;
`;
export const Title = styled.h1`
  color: #001529;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
export const StyledMenu = styled(Menu)`
  height: 100%;
  
  }
  .ant-menu-item-active {
    :focus-visible {
      border: 4px solid rgba(97, 186, 250, 0.7);
      border-radius: 8px;
    }
  }
  .ant-menu-item-active .ant-menu-item-selected {
    :focus-visible {
      border: none;
    }
  }
`;
