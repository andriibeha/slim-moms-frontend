import styled from '@emotion/styled';


export const BackgroundStyled = styled.div`
  width: 100%;
  height: 100%;
`;


export const ImgLeaves = styled.img`
position: absolute;
    right: -235px;
    top: 35px;
    z-index: 1;
    display: none;
    @media screen and (min-width: 1280px) {
    display: block;
  }
`;

// Tablet----------------------------

export const ImgLeavesTablet = styled.img`
position: absolute;
    left: 399px;
    top: 662px;
    z-index: 1;
    display: none;
    @media screen and (min-width: 768px) and  (max-width: 1279px){
    display: block;
  }
`;