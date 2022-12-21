import { Field, Form } from 'formik';
import styled from '@emotion/styled';

export const FormLogIn = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 76px;

  @media screen and (min-width: 768px) {
    align-items: start;
    gap: 60px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${p => p.theme.colors.textFirst};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  width: 280px;
`;

export const Input = styled(Field)`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline-color: ${p => p.theme.colors.accent};
  width: 280px;
  height: 20px;
`;

export const ErrorText = styled.p`
  color: red;
  width: 100%;
  text-align: justify;
`;
