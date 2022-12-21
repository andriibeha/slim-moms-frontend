import styled from '@emotion/styled';

export const Box = styled('div')`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1280px) {
    align-items: end;
  }
`;
export const LogoStyled = styled('p')`
  padding: 0px;
  margin: 0px;
  margin-left: 0px;
  color: #212121;
  opacity: 0;

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    fontsize: 16px;
    opacity: 1;
  }

  @media screen and (min-width: 1280px) {
    margin-left: -11px;
    fontsize: 20px;
  }
`;
export const Span = styled('span')`
  color: #fc842d;
  @media screen and (min-width: 768px) {
    fontsize: 16px;
  }

  @media screen and (min-width: 1280px) {
    fontsize: 20px;
  }
`;

export const Img = styled('img')`
  width: 44px;
  height: 44px;

  @media screen and (min-width: 1280px) {
    width: 70px;
    height: 66px;
  }
`;
