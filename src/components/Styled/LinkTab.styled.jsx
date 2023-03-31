import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';
import { NavLink } from 'react-router-dom';

export const LinkTab = styled(NavLink)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  position: relative;
  margin-right: 20px;
  border: 1px dashed ${colors.color1};
  padding: 5px 15px;
  border-radius: 20px;
  ${transition('opacity', 'box-shadow')};

  &:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 5px 2px ${colors.color1};
  }

  &.active {
    color: ${colors.color2};
    text-shadow: 0px 0px 10px ${colors.color1};

    &:before {
      content: '';
      position: absolute;
      left: 25%;
      bottom: -2px;
      width: 50%;
      height: 3px;
      border-radius: 100%;
      background-color: ${colors.color2};
    }
  }
`;
