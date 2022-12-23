import { Logo } from 'components/Logo';
import { HeaderStyled } from './Header.Styled';
import { UserInfo } from 'components/UserInfo';
import { Navigation } from 'components/Navigation';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
