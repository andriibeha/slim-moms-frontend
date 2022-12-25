import styled from '@emotion/styled';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 175px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 160px 32px 495px;
  }
  @media screen and (min-width: 1280px) {
    padding: 160px 16px 255px;
  }
`;

export const TitleLogIn = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.s};
`;
