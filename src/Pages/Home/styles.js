import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Content } = Layout;


export const NavigationLink = styled(Link)`
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
`;
export const CustomHeader = styled(Header)`
    display: inline-flex;
    align-items: center; 
    min-height: 8vh; 
    border-radius: 8px; 
    padding: 0; 
    background-color: #fff;
`;
export const CustomContent = styled(Content)`
    text-align: center;
    margin: 1vh;
    padding: 16px;
    min-height: 90vh;
    border-radius: 8px;
    background-color: #fff;
`;
export const CustomButton = styled(Button)`
    font-size: 16px;
    width: 64px;
    height: 64px;
    margin-right: 41%;
`;
export const Title = styled.h1`
    color: #001529;
`