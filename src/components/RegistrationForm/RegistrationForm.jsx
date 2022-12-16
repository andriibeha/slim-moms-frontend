
import React, { useState } from 'react';

import {
  Title,
  FormList,
  FormItem,
  Label,
  Input,
  ButtonsContainer,
  Button,
  StyledNavLink,
  Form,
  Wrap,
  ShowPassButton
} from "./RegistrationForm.styled";






export const RegistrationForm = () => {
 const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
    <Wrap>
      <Title>Реєстрація</Title>

      <Form >
        <FormList>
          <FormItem>
            <Label htmlFor="name">Ім'я *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              
            />      
          </FormItem>
          <FormItem>
            <Label htmlFor="email">Електронна пошта *</Label>

            <Input
              id="email"
              name="email"
              type="text"         
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="password">Пароль *</Label>

            <Input
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
            />
            <ShowPassButton type='button' onClick={handleClick}  show={show} >Показати пароль?</ShowPassButton>

            
          </FormItem>
          </FormList>
            </Form>
 
        <ButtonsContainer bg="green" height="108px">
          <Button type="submit" >Зареєструватися</Button>

          <StyledNavLink to="/login">Увійти</StyledNavLink>
        </ButtonsContainer>
    
     </Wrap>
      </>
  );
};
