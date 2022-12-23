import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
  // let isLoggedIn = localStorage.getItem('user');
  let isLoggedIn = false;

  return (
    <>{!isLoggedIn ? children : <Navigate to="/registration" replace />}</>
  );
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
