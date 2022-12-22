import logo from '../../images/logo_desktop_1x.webp';
import { Box, LogoStyled, Span, Img } from './Logo.Styled';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    // Якщо користувач isLoggedIn тоді Link направляє на сторінку "/Diary", а якщо !isLoggedIn - направляє на "/login"
    <Link to="/login">
      <Box>
        <Img src={logo} alt="main logo" />

        <LogoStyled>
          Slim
          <Span color="#FC842D" fontSize={[0, 0, 16, 20]}>
            Mom
          </Span>
        </LogoStyled>
      </Box>
    </Link>
  );
};
