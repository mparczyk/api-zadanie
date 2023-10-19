import styled from 'styled-components';
import { Form } from 'antd';

import { ReactComponent as EditIcon } from '../../assets/icons/edit-button.svg';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledEditIcon = styled(EditIcon)`
  width: 24px;
  height: 24px;
`;
export const StyledForm = styled(Form)`
  max-width: 600px;
`;
