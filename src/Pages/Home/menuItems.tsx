import { EditOutlined, HomeOutlined, FileTextOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';

import { StyledLink } from './styles';

type MenuItems = Required<MenuProps>['items'];

export const menu: MenuItems = [
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
