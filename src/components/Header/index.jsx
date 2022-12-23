import { Logo } from 'components/Logo';
import { HeaderStyled } from './Header.Styled';
import { UserInfo } from 'components/UserInfo';
import { Navigation } from 'components/Navigation';
// import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);
  return (
    <HeaderStyled>
      {/* <Link to="/diary"> */}
      <Logo />
      {/* </Link> */}
      {/* <Navigation /> */}

      <div>{isLoggedIn ? <UserInfo /> : <Navigation />}</div>
    </HeaderStyled>
  );
};
