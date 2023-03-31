import styled from '@emotion/styled';
import { colors } from 'constants';

export const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 30px;
  padding: 30px 0 30px 0;
  font-size: calc(32px + 1.5vw);
  color: ${colors.color2};
  font-family: 'Michroma', sans-serif;
  position: relative;
  color: #fff;
  text-shadow: 0px 0px 20px ${colors.color1}, 0px 0px 10px ${colors.color2},
    0px 0px 10px rgba(0, 0, 0, 0.503);
  user-select: none;

  & a {
    color: #fff;
  }

  & span {
    color: ${colors.color1};
  }

  &:before {
    content: '';
    opacity: 0.9;
    background-color: rgba(0, 0, 0, 0);
    width: 160px;
    height: 160px;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: 0px 0px 50px 10px ${colors.color2},
      0px 0px 30px 20px ${colors.color2},
      inset 0px 0px 20px 10px ${colors.color2},
      inset 0px 0px 50px 0px ${colors.color1};
  }
`;
