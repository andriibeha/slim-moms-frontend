import { Outlet, NavLink } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <NavLink to="/registration">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
