import { NavStyled, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavStyled>
      <Link to="/">Sign IN</Link>
      <Link to="/">Registration</Link>
    </NavStyled>
  );
};
