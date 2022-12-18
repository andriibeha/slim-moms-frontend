import { Logo } from 'components/Logo';
// import { Navigation } from 'components/Navigation';
import { HeaderStyled } from './Header.Styled';
// import { Userinfo } from 'components/Userinfo';
// import { Navigation } from 'components/Navigation';
import { Navigation } from 'components/Navigation';

export const Header = () => {
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
      <Logo />
      <Navigation />
      {/* <Userinfo /> */}
    </HeaderStyled>
  );
};
