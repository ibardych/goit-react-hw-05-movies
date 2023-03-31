import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const FilterButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 4px 14px;
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  display: block;
  position: relative;
  z-index: 3;
  position: relative;
  ${transition('transform', 'box-shadow', 'border-radius')};

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    width: 100%;
    max-width: 72px;
    height: 100%;
    border-radius: 100%;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      rgb(242, 255, 0) 0%,
      ${colors.color1} 100%
    );
  }

  &:hover:before {
    box-shadow: -10px 0px 20px 5px ${props => colors[props.color || 'color1']},
      10px 0px 20px 5px ${props => colors[props.color || 'color2']};
  }

  &.active {
    font-weight: 600;
  }

  &.active:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 4px;
    width: 100%;
    max-width: 72px;
    height: 100%;
    border-radius: 100%;
    transform: translateX(-50%);
    border-bottom: 2px solid ${colors.color2};
  }

  &.icon {
    display: block;
    flex-basis: 50px;
    width: 50px;
    height: 50px;
    padding: 0px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    font-size: 30px;

    &:hover {
      border-radius: 30px;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;
