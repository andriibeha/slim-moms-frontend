import styled from '@emotion/styled';

export const ContainerForm = styled.form`
  display: flex;
  width: 100%;
  gap: 48px;
  align-items: center;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;

  @media screen and (max-width: 767px) {
    margin-left: 20px;
    padding-top: 80px;
    flex-direction: column;
  }
`;

export const WeightInputStyled = styled.input`
  display: inline-block;
  height: 48px;
  width: 280px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  border-bottom: 1px solid #e0e0e0;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  &::placeholder {
    color: #9b9faa;
  }
  @media screen and (min-width: 768px) {
    width: 106px;
  }

  :focus {
    outline: none;
  }
`;
