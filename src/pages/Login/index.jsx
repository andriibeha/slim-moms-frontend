import Loader from 'components/Loader/Loader';
import { FormLogin } from 'components/LoginForm';
import { useAuth } from 'hooks/useAuth';

export const Login = () => {
  const { isLoading } = useAuth();
  return (
    <>
      <h2>LOG IN</h2>
      <FormLogin />
      {isLoading && <Loader />}
    </>
  );
};
