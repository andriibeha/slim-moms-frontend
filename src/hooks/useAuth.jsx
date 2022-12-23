import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoading,
  selectIsLoggedIn,
} from 'redux/login/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoading: useSelector(selectIsLoading),
    isLoggedIn: useSelector(selectIsLoggedIn),
  };
};
