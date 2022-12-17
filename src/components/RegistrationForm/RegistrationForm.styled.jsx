import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  padding: 40px 20px;
  @media screen and (min-width: 768px) {
    padding-top: 160px;
    padding-left: 32px;
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #fc842d;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const Form = styled.form`
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const FormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormItem = styled.li`
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  height: 16px;
  color: #9b9faa;
  letter-spacing: 0.04em;
  font-weight: 700;
`;

export const Input = styled.input`
  height: 20px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (min-width: 768px) {
    max-width: 240px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 32px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  letter-spacing: 0.04em;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 13px 25px;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 250ms, color 250ms;
  &:hover,
  &:focus {
    color: #fc842d;
    background: transparent;
  }
  &:disabled {
    background: #9b9faa;
    box-shadow: 0px 4px 10px #9b9faa;
  }
  max-width: 180px;
`;

export const StyledNavLink = styled(Link)`
  font-weight: 700;
  letter-spacing: 0.04em;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 13px 25px;
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #fc842d;
  cursor: pointer;
  transition: background-color 250ms, color 250ms;
  &:hover,
  &:focus {
    color: #ffffff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    background: #fc842d;
  }
  &:disabled {
    background: #9b9faa;
    box-shadow: 0px 4px 10px #9b9faa;
  }
  max-width: 180px;
`;

export const ShowPassButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: none;
  background: transparent;
  padding: 0;
  color: #9b9faa;
`;
