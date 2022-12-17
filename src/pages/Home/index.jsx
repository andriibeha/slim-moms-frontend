// import Loader from 'components/Loader/Loader';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { UserInfo } from 'components/UserInfo';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';

export const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Logo />
      {/* <Loader /> */}
      <div>{isLoggedIn ? <UserInfo /> : <p>Блок навигации</p>}</div>
      <Button text="Hello" />
    </>
  );
};
