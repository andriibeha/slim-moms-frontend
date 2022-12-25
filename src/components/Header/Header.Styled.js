import styled from '@emotion/styled';

export const HeaderStyled = styled('header')`
  border-bottom: 2px solid #e0e0e0;
  /* color: #212121; */
  display: flex;
  position: relative;

  justify-content: space-between;
  padding: 20px 20px 16px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 32px 16px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 80px 16px 0;
    border-bottom: none;
    justify-content: start;
    align-items: baseline;
  }
`;
