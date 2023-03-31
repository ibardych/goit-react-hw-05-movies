import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const MovieThumbItemStyled = styled.li`
  flex-basis: calc((100% - 4 * 20px) / 5);
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 7px;
  position: relative;
  box-shadow: 0px 1px 5px -2px rgb(0 0 0 / 0.25);
  background-color: rgb(255, 255, 255, 0.03);
  cursor: pointer;
  position: relative;
  padding: 3px 3px 10px 3px;
  overflow: hidden;
  display: flex;
  ${transition('transform', 'box-shadow')}

  @media screen and (max-width: 1500px) {
    flex-basis: calc((100% - 20px * 2) / 3);
  }

  @media screen and (max-width: 1200px) {
    flex-basis: calc((100% - 20px * 1) / 2);
  }

  @media screen and (max-width: 800px) {
    flex-basis: 100%;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 150px 5px ${colors.color1},
      0px 50px 80px 15px rgb(0, 0, 0, 1);
    z-index: 3;

    & .item {
      color: rgb(255, 255, 255, 0.8) !important;
    }
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    left: -150%;
    top: -50%;
    width: 400%;
    height: 200%;
    background: conic-gradient(
      rgb(255, 205, 29, 0.3),
      rgb(255, 205, 29, 1),
      rgb(255, 205, 29, 0.3),
      rgb(255, 205, 29, 1),
      rgb(255, 205, 29, 0.3)
    );
    transform-origin: center;
    animation: animate 6s linear infinite;
    opacity: 0;
    ${transition('opacity')};
  }

  &:hover::before {
    opacity: 1;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & .container {
    background-color: rgb(31, 30, 43);
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 0;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  & .image-wrapper {
    overflow: hidden;
    position: relative;

    &::after {
      content: '';
      display: block;
      padding-top: 135%;
    }
  }

  & .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .title {
    font-size: 16px;
    color: #ffffffc3;
    padding: 12px 12px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .title {
    color: ${colors.color2};
  }
`;
