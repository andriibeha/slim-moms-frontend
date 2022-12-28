import styled from '@emotion/styled';

export const CalculatorStyledPage = styled('div')`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    display: -webkit-box;
  }
`;

export const CalculatorStyled = styled('div')`
  // padding-top: 40px;
  // padding-left: 20px;
  // padding-right: 20px;
  display: box;
  // flex-direction: column;
  // align-items: center;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-left: 32px;
    // align-items: start;
  }
  @media screen and (min-width: 1280px) {
    margin: 140px 139px 111px 0;

    // align-items: start;
  }
`;
