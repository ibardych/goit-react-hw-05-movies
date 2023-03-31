import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const GalleryItemStyled = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
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
    justify-content: space-between;
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
  }

  &:hover .title {
    color: ${colors.color2};
  }

  & .stats {
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    padding: 22px 12px;
    background-color: rgba(0, 0, 0, 0.286);

    & .item {
      text-align: center;
      color: rgba(255, 255, 255, 0.693);
      font-size: 14px;
      font-weight: 200;
      ${transition('color')};

      & b {
        display: inline-block;
        margin-bottom: 5px;
        font-weight: 500;
        display: block;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;
