import { EditOutlined, HomeOutlined, FileTextOutlined } from '@ant-design/icons';

import { StyledLink } from './styles';

interface menuProps {
  key: string;
  icon: JSX.Element;
  label: JSX.Element;
}

export const menu: menuProps[] = [
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
