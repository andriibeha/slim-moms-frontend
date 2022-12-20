import logo from '../../images/logo_desktop_1x.webp';
import { Box, LogoStyled, Span, Img } from './Logo.Styled';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/diary">
      <Box display="flex" alignItems={['center', 'center', 'center', 'end']}>
        <Img
          src={logo}
          alt="main logo"
          width={[44, 44, 44, 70]}
          height={[44, 44, 44, 66]}
        />

        <LogoStyled
          p={0}
          m={0}
          ml={[0, 0, 10, -11]}
          color="#212121"
          opacity={[0, 0, 1]}
          fontSize={[0, 0, 16, 20]}
        >
          Slim
          <Span color="#FC842D" fontSize={[0, 0, 16, 20]}>
            Mom
          </Span>
        </LogoStyled>
      </Box>
    </Link>
  );
};
