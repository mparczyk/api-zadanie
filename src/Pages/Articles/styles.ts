import styled from 'styled-components';
import { Form } from 'antd';

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
