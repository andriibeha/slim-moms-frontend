import { NavLink } from 'react-router-dom';

export const AppNavigation = () => {
  return (
    <nav>
      <NavLink to="/">Sign IN</NavLink>
      <NavLink to="/">Registration</NavLink>
    </nav>
  );
};
