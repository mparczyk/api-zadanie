import { useState } from 'react';
import { Outlet } from 'react-router';
import { useMatches } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { menu } from './menuItems';

import { CustomButton, CustomContent, CustomHeader, Title, TitleWrapper } from './styles';

const { Sider } = Layout;

export const Home = (): JSX.Element => {
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
