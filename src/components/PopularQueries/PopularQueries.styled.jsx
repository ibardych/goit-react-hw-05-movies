import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const PopularQueriesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgb(255, 255, 255, 0);
  margin-bottom: 50px;
  ${transition('background-color')}

  & .query {
    background-color: rgb(0, 0, 0, 0.1);
    padding: 4px 12px;
    border-radius: 20px;
    color: #ffffffcd;
    font-weight: 300;
    border-left: 2px solid ${colors.color2};
    border-right: 2px solid ${colors.color2};
    box-shadow: 0px 0px 8px -1px ${colors.color2};
    cursor: pointer;
    ${transition('color', 'box-shadow', 'background-color')}

    &:hover {
      color: ${colors.color2};
      box-shadow: 0px 0px 10px 0px ${colors.color1};
    }

    &.active {
      border-left: 2px solid ${colors.color1};
      border-right: 2px solid ${colors.color1};
      color: ${colors.color1};
      box-shadow: 0px 0px 14px 3px ${colors.color1};
    }
  }

  & .title {
    color: #ffffffbf;
  }
`;
