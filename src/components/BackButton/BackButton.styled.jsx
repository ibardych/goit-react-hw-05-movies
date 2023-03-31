import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const BackButtonStyled = styled.div`
  display: flex;
  margin-bottom: 20px;

  & .link {
    display: flex;
    align-items: center;
    gap: 5px;
    background: linear-gradient(
      90deg,
      rgb(242, 255, 0) 0%,
      ${colors.color1} 100%
    );
    color: #000000;
    padding: 5px 20px 5px 10px;
    border-radius: 20px;
    box-shadow: 5px 0px 5px 0px rgb(0, 0, 0, 0.3);
    ${transition('opacity', 'transform')};

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
`;
