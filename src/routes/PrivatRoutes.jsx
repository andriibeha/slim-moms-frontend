import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  // let isLoggedIn = localStorage.getItem('user');
  let isLoggedIn = true;

  return <>{isLoggedIn ? children : <Navigate to="/diary" replace />}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
