import { useState } from 'react';
import { Outlet } from 'react-router';
import { useMatches } from 'react-router-dom';

import { MenuFoldOutlined, MenuUnfoldOutlined, EditOutlined, HomeOutlined, FileTextOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { CustomButton, CustomContent, CustomHeader, StyledLink, Title, TitleWrapper } from './styles';

const { Sider } = Layout;

const menu = [
  {
    key: 'start',
    icon: <HomeOutlined />,
    label: <StyledLink to={`/`}>Start</StyledLink>,
  },
  {
    key: 'articles',
    icon: <FileTextOutlined />,
    label: <StyledLink to={`/articles`}>Arcitles</StyledLink>,
  },
  {
    key: 'newarticle',
    icon: <EditOutlined />,
    label: <StyledLink to={`/newarticle`}>New Article</StyledLink>,
  },
];

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const matches = useMatches();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme='dark' mode='inline' selectedKeys={[matches.at(-1)?.id ?? '']} items={menu} />
      </Sider>
      <Layout>
        <CustomHeader>
          <CustomButton
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(prevState => !prevState)}
          />
          <TitleWrapper>
            <Title>Super Article Page</Title>
          </TitleWrapper>
        </CustomHeader>
        <CustomContent>
          <Outlet />
        </CustomContent>
      </Layout>
    </Layout>
  );
};
