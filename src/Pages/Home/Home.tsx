import { useState } from 'react';
import { Outlet } from 'react-router';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  EditOutlined,
  HomeOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { CustomButton, CustomContent, CustomHeader, NavigationLink, Title } from './styles';

const { Sider } = Layout;

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <NavigationLink className="link" to={`/`}>Start</NavigationLink>,
            },
            {
              key: '2',
              icon: <FileTextOutlined />,
              label: <NavigationLink className="link" to={`/articles`}>Arcitles</NavigationLink>,
            },
            {
              key: '3',
              icon: <EditOutlined />,
              label: <NavigationLink className="link" to={`/newarticle`}>New Article</NavigationLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <CustomHeader>
          <CustomButton
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Title>Super Article Page</Title>
        </CustomHeader>
        <CustomContent>
          <Outlet />
        </CustomContent>
      </Layout>
    </Layout>
  );
};