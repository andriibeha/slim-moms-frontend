import { Logo } from 'components/Logo';
import { HeaderStyled } from './Header.Styled';
// import { UserInfo } from 'components/UserInfo';
import { Navigation } from 'components/Navigation';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth/auth-selectors';

export const Header = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <HeaderStyled
      px={[20, 20, 32, 16]}
      pt={[20, 20, 32, 80]}
      pb={[20, 20, 32, 80]}
      borderBottom={[
        '2px solid #E0E0E0',
        '2px solid #E0E0E0',
        '2px solid #E0E0E0',
        '0',
      ]}
      justifyContent="space-between"
      alignItems="center"
      color="#212121"
      display="flex"
    >
      {/* <Link to="/diary"> */}
      <Logo />
      {/* </Link> */}
      <Navigation />
      {/* <div>{isLoggedIn ? <UserInfo /> : <Navigation />}</div> */}
      {/* <Userinfo /> */}
    </HeaderStyled>
  );
};
