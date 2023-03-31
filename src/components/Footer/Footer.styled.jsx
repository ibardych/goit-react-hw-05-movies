import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  height: 100px;
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 50px;
    display: block;
    margin-bottom: 20px;
  }

  & ul {
    width: 100%;
    display: flex;
    gap: 50px;
    justify-content: center;
  }
`;
