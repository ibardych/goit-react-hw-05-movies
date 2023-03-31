import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  color: ${colors.color1};
  font-size: 20px;
  ${transition('opacity')};
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    color: ${colors.color2};
    text-shadow: 0px 0px 10px ${colors.color1};

    &:before {
      content: '';
      position: absolute;
      left: 20%;
      bottom: -5px;
      width: 60%;
      height: 2px;
      border-radius: 100%;
      background-color: ${colors.color2};
    }
  }
`;
