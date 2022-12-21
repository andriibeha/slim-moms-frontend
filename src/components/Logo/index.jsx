import logo from '../../images/logo_desktop_1x.webp';
import { Box, LogoStyled, Span, Img } from './Logo.Styled';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/diary">
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
