import styled from '@emotion/styled';


export const BackgroundStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImgBanana = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    z-index: -3;
    display: none;
    @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const ImgStraw = styled.img`
       position: absolute;
    right: 36px;
    top: 506px;
    z-index: -2;
    display: none;
    filter: drop-shadow(10px 20px 50px rgba(0, 0, 0, 0.3));
    @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const ImgLeav = styled.img`
       position: absolute;
    right: 196px;
    top: 0;
    z-index: -1;
    display: none;
    @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const ImgShadow = styled.img`
position: absolute;
    right: 0px;
    top: 34px;
    z-index: -4;
    display: none;
    @media screen and (min-width: 1280px) {
    display: block;
  }
`;

// Tablet----------------------------

export const ImgBananaTablet = styled.img`
    position: absolute;
    right: 0;
    top: 593px;
    z-index: -1;
    display: none;
    @media screen and (min-width: 768px) and  (max-width: 1279px) {
    display: block;
  }
`;

export const ImgStrawTablet = styled.img`
       position: absolute;
    /* right: 96px; */
    left:464px ;
    top: 583px;
    z-index: -2;
    display: none;
     @media screen and (min-width: 768px) and  (max-width: 1279px) {
    display: block;
  }
`;

export const ImgLeavTablet = styled.img`
       position: absolute;
        /* bottom: -474px; */
        top: 493px;
    left: 0;
    z-index: -3;
    display: none;
     @media screen and (min-width: 768px) and  (max-width: 1279px) {
    display: block;
  }
`;

export const ImgShadowTablet = styled.img`
position: absolute;
    right: 0;
    top: 461px;
    z-index: -4;
    display: none;
    @media screen and (min-width: 768px) and  (max-width: 1279px){
    display: block;
  }
`;