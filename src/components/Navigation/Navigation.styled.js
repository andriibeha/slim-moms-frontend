import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavStyled = styled('nav')`
  margin-top: auto;
  width: 211px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 221px;
  }

  @media screen and (min-width: 1280px) {
    width: 215px;
  }
`;

export const Link = styled(NavLink)`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  text-transform: uppercase;

  color: ${p => p.theme.colors.textFirst};
  transition: ${p => p.theme.transition.all};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.textSecond};
  }
  &.active {
    color: ${p => p.theme.colors.textSecond};
  }
`;
