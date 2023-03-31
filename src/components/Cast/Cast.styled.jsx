import styled from '@emotion/styled';

export const CastStyled = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;

  & li {
    width: calc((100% - 20px * 7) / 8);
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 1280px) {
      width: calc((100% - 20px * 6) / 7);
    }

    @media screen and (max-width: 1100px) {
      width: calc((100% - 20px * 5) / 6);
    }

    @media screen and (max-width: 900px) {
      width: calc((100% - 20px * 4) / 5);
    }

    @media screen and (max-width: 700px) {
      width: calc((100% - 20px * 3) / 4);
    }

    @media screen and (max-width: 500px) {
      width: calc((100% - 20px * 2) / 3);
    }

    @media screen and (max-width: 400px) {
      width: 100%;
    }

    & img {
      border-radius: 3px;
      margin-bottom: 10px;
      display: block;
    }

    & .title {
      color: #fff;
      margin-bottom: 10px;
      padding: 0 5px;
    }

    & .subtitle {
      color: #ffffff9a;
      padding: 0 5px;
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;
