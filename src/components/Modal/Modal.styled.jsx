import styled from '@emotion/styled';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  padding: 40px 20px 0 20px;
  background-color: white;

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 672px;
    height: auto;
    padding: 64px 82px 80px 82px;
  }
`;

export const ModalButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 24px;
    right: 24px;
    display: block;
    background-color: #11ffee00;
    border: none;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
