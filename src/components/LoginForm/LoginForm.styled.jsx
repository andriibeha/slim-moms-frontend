import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormLogIn = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
export const Input = styled(Field)`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline-color: blue;
  width: 280px;
  hieght: 38px;
  padding: 5px;
`;
export const ErrorText = styled.p`
  color: red;
  width: 300px;
  text-align: justify;
`;
