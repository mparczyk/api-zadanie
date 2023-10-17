import styled from 'styled-components';

import { ReactComponent as EditIcon } from '../assets/icons/edit-button.svg';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledEditIcon = styled(EditIcon)`
  width: 25px;
  height: 25px;
`;
