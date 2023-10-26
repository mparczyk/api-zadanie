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
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(prevState => !prevState)}>
        <Menu theme='dark' mode='inline' selectedKeys={[matches.at(-1)?.id ?? '']} items={menu} />
      </Sider>
      <Layout style={{ backgroundColor: '#001529' }}>
        <CustomContent>
          <Outlet />
        </CustomContent>
      </Layout>
    </Layout>
  );
};
