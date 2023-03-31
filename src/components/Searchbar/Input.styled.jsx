import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Input = styled.input`
  border-radius: 0px;
  border: 0;
  outline: none;
  padding: 8px 36px 8px 2px;
  font-size: 18px;
  width: 280px;
  max-width: 100%;
  background-color: rgb(0, 0, 0, 0);
  border-bottom: 1px solid #555;
  color: #fff;
  ${transition('width', 'border-bottom')}

  &::placeholder {
    color: #969696;
  }

  &:not(:placeholder-shown),
  &:focus {
    width: 360px;
    border-bottom: 1px solid ${colors.color1};
  }
`;
