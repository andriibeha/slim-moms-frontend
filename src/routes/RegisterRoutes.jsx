import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/auth-selectors';

 const RegisterRoute = ({ children, redirectTo = '/' }) => {
  const user = useSelector(selectUser);
  console.log(user)

  return !user.email ? children : <Navigate to={redirectTo} replace />;
};

export default RegisterRoute;