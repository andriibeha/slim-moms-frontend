import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {
  Title,
  FormList,
  FormItem,
  Label,
  Input,
  ButtonsContainer,
  Button,
  StyledNavLink,
  FormReg,
  Wrap,
  ShowPassButton,
  MessageErr,
} from './RegistrationForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <MessageErr>{message}</MessageErr>}
    />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be at most 8 characters')
    .required('Name is a required field'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(3, 'Password must be at least 3 characters')
    .max(8, 'Password must be at most 8 characters')
    .required('Password is a required field'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};


export const RegistrationForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  // const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    // dispatch(registration({ name, email, password }));
    console.log({ name, email, password })
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
      <Wrap>
        <Title>Register</Title>

        <FormReg autoComplete='off'>
          <FormList>
            <FormItem>
              <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" type="text" />
                <FormError name="name" component="p" />
            </FormItem>
            <FormItem>
              <Label htmlFor="email">Email  *</Label>
                <Input id="email" name="email" type="text" />
                <FormError name="email" component="p" />
            </FormItem>

            <FormItem>
              <Label htmlFor="password">Password *</Label>
             <Input
                id="password"
                name="password"
                type={show ? 'text' : 'password'}
                />
                <FormError name="password" component="p" />
              <ShowPassButton type="button" onClick={handleClick} show={show}>
                Show password?
              </ShowPassButton>
            </FormItem>
          </FormList>
          <ButtonsContainer bg="green" height="108px">
          <Button type="submit">Register</Button>

          <StyledNavLink to="/login">Log in</StyledNavLink>
        </ButtonsContainer>
        </FormReg>

        
        </Wrap>
        </Formik>
    </>
  );
};
