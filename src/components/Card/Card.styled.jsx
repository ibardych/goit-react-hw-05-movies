import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const CardStyled = styled.div`
  display: flex;
  gap: 50px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  & .image {
    width: 300px;
    max-width: 100%;

    & img {
      display: block;
      max-width: 100%;
    }
  }

  & .title {
    font-weight: 300;
    font-size: 28px;
    color: #fffffff4;
    margin-bottom: 30px;
  }

  & .date {
    font-weight: 300;
    font-size: 16px;
    color: ${colors.color1};
    margin-bottom: 30px;

    & span {
      color: ${colors.color2};
    }
  }

  & .overview {
    font-weight: 300;
    font-size: 18px;
    color: #ffffffc5;
    margin-bottom: 30px;
    max-width: 600px;
    line-height: 1.6;
    word-break: break-word;
  }

  & .link {
    font-weight: 300;
    font-size: 16px;
    color: ${colors.color1};
    margin-bottom: 30px;
    display: block;
    display: flex;
    align-items: center;
    ${transition('opacity')};

    &:hover {
      opacity: 0.8;
    }

    & .icon {
      margin-right: 5px;
    }
  }

  & .genres {
    font-weight: 300;
    font-size: 16px;
    color: ${colors.color2};
    display: flex;
    gap: 10px 20px;
    margin-bottom: 30px;

    @media screen and (max-width: 425px) {
      flex-direction: column;
      align-items: flex-start;
    }

    & span {
      padding: 5px 12px;
      border-left: 1px solid ${colors.color2};
      border-right: 1px solid ${colors.color2};
      background-color: rgb(0, 0, 0, 0.1);
      border-radius: 20px;
      box-shadow: 0px 0px 10px 0px rgba(255, 217, 0, 0.2);
      font-weight: 400;
    }
  }
`;
