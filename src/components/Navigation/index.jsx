import { NavStyled, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavStyled>
      <Link to="/login">Sign IN</Link>
      <Link to="/register">Registration</Link>
    </NavStyled>
  );
};
