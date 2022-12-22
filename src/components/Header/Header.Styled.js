import styled from '@emotion/styled';

export const HeaderStyled = styled('header')`
  border-bottom: 2px solid #e0e0e0;
  color: #212121;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 80px 16 px;
    border-bottom: none;
  }
`;
