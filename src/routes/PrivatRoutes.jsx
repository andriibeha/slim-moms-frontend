import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/auth-selectors';
import { useAuth } from 'hooks/useAuth';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
