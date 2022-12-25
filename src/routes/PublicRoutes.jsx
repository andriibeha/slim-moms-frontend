import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/auth-selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{!isLoggedIn ? children : <Navigate to="/diary" replace />}</>;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
