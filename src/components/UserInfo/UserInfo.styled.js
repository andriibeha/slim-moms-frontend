import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 20px;
`;

export const UserInfoBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
  }
`;

export const UserNameContainer = styled.div`
  position: absolute;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 0 auto;
  background: #eff1f3;

  font-size: ${p => p.theme.fontSizes.s}; //14px
  font-weight: ${p => p.theme.fontWeights.bold}; // 700
  letter-spacing: 0.04em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  left: 0;
  top: 77px;

  @media screen and (min-width: 768px) {
    padding-right: 48px;
    background: none;
    position: relative;
    top: 0;
    left: 70%;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const NavLinkBox = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    margin-left: auto;

    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;

export const NameBox = styled.div`
  display: flex;
`;

export const UserName = styled.p`
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-transform: capitalize;

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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${p => p.theme.colors.textFirst}; // #9b9faa;
  transition: ${p => p.theme.transition.color};
  cursor: pointer;

  &:hover,
  :focus {
    color: ${p => p.theme.colors.textSecond}; // #212121;
  }
`;

export const ModalBox = styled.div`
  position: fixed;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  top: 77px;
  left: 0;
  transform: translateX(110%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &.active {
    transform: translateX(0);
  }
  @media screen and (min-width: 1280px) {
    display: none;
    position: relative;
  } ;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #264061;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-left: 216px;
    padding-right: 216px;
  }
`;
export const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-left: auto;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    outline: 0;
  }

  :hover {
    span:nth-of-type(1) {
      width: 15px;
    }

    span:nth-of-type(2) {
      width: 18px;
    }

    span:nth-of-type(3) {
      width: 15px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(5px, 4px);
      width: 14px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(2.7px, -2.3px);
      width: 14px;
    }
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Bar = styled.span`
  display: block;
  width: 18px;
  height: 2px;
  margin-bottom: 3px;
  background-color: black;
`;

export const BackArrow = styled.svg`
  width: 20px;
  height: 20px;
  fill: black;
`;

export const BackLink = styled(Link)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const UserNavLink = styled(Link)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: ${p => p.theme.colors.textFirst}; // #9b9faa;
  &:hover {
    color: ${p => p.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
    line-height: 17px;
    padding: 10px 9px;
    &:first-child {
      padding-left: 20px;
      border-left: 2px solid #e0e0e0;
    }

    &:hover {
      color: ${p => p.theme.colors.textSecond};
    }
  }
`;
