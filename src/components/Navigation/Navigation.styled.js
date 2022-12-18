import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavStyled = styled('nav')();

export const Link = styled(NavLink)`
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.textSecond};
  transition: all 250ms easy, color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.textFirst};
  }
  &.active {
    color: ${p => p.theme.colors.textFirst};
  } */
`;
