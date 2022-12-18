import { useSelector } from 'react-redux';
import { selectUser, selectIsLoading } from 'redux/login/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoading: useSelector(selectIsLoading),
  };
};
