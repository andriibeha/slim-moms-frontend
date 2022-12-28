import styled from '@emotion/styled';

export const HeaderStyled = styled('header')`
  border-bottom: 2px solid #e0e0e0;
  padding-top: 20px;
  padding-bottom: 16px;

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-right: 16px;
    border-bottom: none;
    justify-content: start;
    align-items: baseline;
  }
`;

export const HeaderStyledContent = styled.div`
  /* color: #212121; */
  display: flex;
  position: relative;

  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 80px 16px 0;
    border-bottom: none;
    justify-content: start;
    align-items: baseline;
  }
`;
