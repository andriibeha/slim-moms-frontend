import { Outlet, NavLink } from 'react-router-dom';
// import { Logo } from 'components/Logo';

import styled from '@emotion/styled';
import {
  typography,
  space,
  color,
  flexbox,
  border,
  layout,
  grid,
  gridRow,
  system,
} from 'styled-system';

const Box = styled('div')(
  typography,
  space,
  color,
  flexbox,
  border,
  layout,
  grid
);
const Header = styled('header')(
  typography,
  space,
  color,
  flexbox,
  border,
  layout,
  grid,
  gridRow
);

const Logo = styled('p')(typography, space, color, flexbox, border, layout);
const Span = styled('span')(typography, space, color);
const Navlink = styled(NavLink)(
  typography,
  space,
  color,
  flexbox,
  border,
  layout,
  system({ textDecoration: true })
);

const SharedLayout = () => {
  return (
    <Box width={[1]} bg="tomato">
      <Header
        p={[20, 20, 32, 16]}
        borderBottom={['1px solid gray', '1px solid gray', '0']}
        justifyContent="space-between"
        alignItems="center"
        color="black"
        display="flex"
      >
        <Logo p={0} m={0} color="black" opacity={[0, 0, 1]}>
          Slim
          <Span color="orange">Mom</Span>
        </Logo>
        <Box as="nav" display="flex" color="yellow">
          <Navlink
            to="/registration"
            color="black"
            mr={[14, 14, 24]}
            textDecoration="none"
          >
            Sign in
          </Navlink>
          <Navlink to="/login" color="black" textDecoration="none">
            Registration
          </Navlink>
        </Box>
      </Header>
      <Box p={[20, 20, 32, 16]}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default SharedLayout;
