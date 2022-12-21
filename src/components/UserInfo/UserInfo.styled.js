import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 0 auto;
  background: #eff1f3;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: ${p => p.theme.fontSizes.s}; //14px
  font-weight: ${p => p.theme.fontWeights.bold}; // 700
  letter-spacing: 0.04em;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 320px) {
    width: 320px;
    height: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 48px;
    background: none;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
  }
`;

export const UserName = styled.p`
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-right: 2px solid #e0e0e0;
  color: ${p => p.theme.colors.textSecond}; // #212121;
`;

export const ExitBtn = styled.button`
  outline: none;
  border: none;
  background: none;
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${p => p.theme.colors.textFirst}; // #9b9faa;
  transition: ${p => p.theme.transition.color};
  cursor: pointer;

  &:hover,
  :focus {
    color: ${p => p.theme.colors.textSecond}; // #212121;
  }
`;
