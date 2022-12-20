import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/login">Sign IN</Link>
      <Link to="/registration">Registration</Link>
    </nav>
  );
};
