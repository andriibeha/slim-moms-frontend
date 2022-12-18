import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextCalorie = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  color: #212121;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const BoxCalorie = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-bottom: 30px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
`;

export const NumberCalorie = styled.p`
  font-size: 48px;
`;

export const Unit = styled.p`
  font-size: 30px;
  margin-left: 10px;
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
`;

export const ListTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  text-align: start;
  margin-bottom: 20px;
  }
`;

export const List = styled('ul')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  }
`;

export const Item = styled.li`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled(NavLink)`
  display: grid;
  place-content: center;
  width: 210px;
  height: 43px;
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: 700;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #fff;
  font-size: 14px;
  background: #fc842d;
  box-shadow: 0px 4px 10px 0px #fc842d80;
  transition: all 250ms easy;
  cursor: pointer;

  &:hover,
  :focus {
    color: #fc842d;
    background: #fff;
  }
`;
