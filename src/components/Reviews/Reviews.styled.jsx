import styled from '@emotion/styled';
import { colors } from 'constants';

export const ReviewsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;

  & li {
    & .author {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      color: #fff;
    }

    & .date {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
      color: ${colors.color1};
    }

    & .content {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff97;
      line-height: 1.6;
      word-break: break-word;
    }
  }
`;
