import styled from '@emotion/styled';
import { theme } from 'components/Theme';

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
  color: ${theme.colors.textSecond};
  display: none;

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    font-size: ${theme.fontSizes.m};
    display: inherit;
  }

  @media screen and (min-width: 1280px) {
    margin-left: -11px;
    font-size: ${theme.fontSizes.l};
  }
`;
export const Span = styled('span')`
  color: ${theme.colors.accent};
  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.m};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${theme.fontSizes.l};
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
