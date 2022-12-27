import { Logo } from 'components/Logo';
import { HeaderStyled } from './Header.Styled';
import { UserInfo } from 'components/UserInfo';
import { Navigation } from 'components/Navigation';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);
  return (
    <>
      <HeaderStyled>
        <Logo />
        {isLoggedIn ? <UserInfo /> : <Navigation />}
      </HeaderStyled>
    </>
  );
};
