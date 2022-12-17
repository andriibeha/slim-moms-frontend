import { StyledButton } from './Button.styled';

export const Button = ({ text, type, color, bg, w, h, font }) => (
  <StyledButton
    type={type || 'button'}
    color={color}
    bg={bg}
    width={w}
    height={h}
    font={font}
  >
    {text}
  </StyledButton>
);
